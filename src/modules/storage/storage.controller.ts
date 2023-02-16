import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { StorageService } from './storage.service';
import { getStorage } from 'firebase-admin/storage';

@Controller('storage')
export class StorageController {
  constructor(private readonly storageService: StorageService) {}

  @Post(':id')
  getData(@Param('id') id: string, @Body() file: {img: File}) {
    return getStorage().bucket('users').upload(file.img.name, {
      destination: id + '/profile.jpg',
    });
  }
}
