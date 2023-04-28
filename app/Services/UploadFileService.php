<?php

namespace App\Services;

use Illuminate\Http\UploadedFile;
use Symfony\Component\HttpFoundation\File\Exception\UploadException;


class UploadFileService
{
    public function uploadRecipeImage(UploadedFile $uploadedFile)
    {
        // dd($uploadedFile->storeAs('recipe', $uploadedFile->hashName(), 'public'), $uploadedFile);
        $path = $uploadedFile->storeAs('recipe', $uploadedFile->hashName(), 'public');
        if ($path === null) {
            throw new UploadException('not save image');
        }

        return $path;
    }
}
