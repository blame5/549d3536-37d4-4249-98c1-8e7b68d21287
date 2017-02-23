package com.website.service;

import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by xinguo on 2/2/17.
 */
@Component
public class StorageService {
    private static final String DIR = "/tmp";

    private String buildPath(String bookId, String type) {
        return DIR +  "/" + bookId + "/" + type;
    }

    public byte[] loadAsResource(String bookId, String filename) throws IOException {
        File file = new File(buildPath(bookId, "audio") + "/" + filename);
        byte[] bytesArray = new byte[(int) file.length()];
        InputStream inputStream = new FileInputStream(file);
        inputStream.read(bytesArray);
        inputStream.close();
        return bytesArray;
    }

    public InputStream loadAsInputStream(String bookId, String filename) throws IOException {
        File file = new File(DIR + "/" + filename);
        return new FileInputStream(file);
    }

    public void store(MultipartFile file, String bookId, String subdir) throws IOException {
        String path = buildPath(bookId, subdir);
        File dir = new File(path);
        if (dir.exists() && !dir.isDirectory()) {
            dir.delete();
        }
        if (!dir.exists()) {
            dir.mkdirs();
        }

        if (!file.isEmpty()) {
            FileOutputStream stream = new FileOutputStream(path +"/" + file.getOriginalFilename());
            stream.write(file.getBytes());
            stream.close();
        }

    }

    public List<String> listAudioFiles(String bookId) {
        ArrayList<String> fileList = new ArrayList<String>();
        String path = buildPath(bookId, "audio");
        File dir = new File(path);
        if (dir.exists() && dir.isDirectory()) {
            for(File file: dir.listFiles()){
                fileList.add(file.getName());
            }
        }
        return fileList;
    }
}
