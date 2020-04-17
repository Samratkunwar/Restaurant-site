import { Injectable } from '@angular/core';
import { Plugins, CameraResultType, Capacitor, FilesystemDirectory, 
  CameraPhoto, CameraSource } from '@capacitor/core';

const { Camera, Filesystem, Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})


export class PhotoService {

  constructor() { }

  public async addNewToGallery() {
    
    // function to take pictures by the user
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri, 
      source: CameraSource.Camera, 
      quality: 100 
    });

    // function to store and display the clicked image
    this.photos.unshift({
      filepath: "soon...",
      webviewPath: capturedPhoto.webPath
    });
  }

  // array to store the pictures
  public photos: Photo[] = [];
}


// characters of the picture
interface Photo {
  filepath: string;
  webviewPath: string;
  base64?: string;
}



