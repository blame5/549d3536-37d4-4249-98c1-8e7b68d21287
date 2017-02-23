package com.website.service;


import io.swagger.annotations.Api;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/service/")
@Api(description = "REST Service")
public class WebsiteService {

    @Autowired
    private StorageService storageService;

    public WebsiteService() {

    }

    @GetMapping("/file/{bookId}/{filename:.+}")
    @ResponseBody
    public ResponseEntity<byte[]> serveFile(@PathVariable String bookId, @PathVariable String filename) throws IOException {
        byte[] file = storageService.loadAsResource(bookId, filename);
        return ResponseEntity
                .ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\""+filename+"\"")
                .body(file);
    }

    @GetMapping("/file/{bookId}")
    @ResponseBody
    public List<String> listFiles(@PathVariable String bookId) {
        List<String> audioFiles = storageService.listAudioFiles(bookId);
        return audioFiles;
    }

    @PostMapping("/upload")
    public String handleFileUpload(@RequestParam("file") MultipartFile file,
                                   @RequestParam("bookId") String bookId,
                                   RedirectAttributes redirectAttributes) throws IOException {

        storageService.store(file, bookId, "audio");
        redirectAttributes.addFlashAttribute("message",
                "You successfully uploaded " + file.getOriginalFilename() + "!");

        return "redirect:/";
    }

    @PostMapping("/upload/bookText")
    public String handleTextUpload(@RequestParam("file") MultipartFile file,
                                   @RequestParam("bookId") String bookId,
                                   @RequestParam("part") String part) throws IOException {
        storageService.store(file, bookId, "text/" + part);
        return "";
    }
}