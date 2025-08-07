package com.example.demo.controller;

import com.example.demo.model.Product;
import com.example.demo.service.ProductService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
public class ProductController {

    private final ProductService service;

    public ProductController(ProductService service) {
        this.service = service;
    }

    @GetMapping
    public List<Product> getAllProducts() {
        return service.getAll();
    }

    @GetMapping("/{id}")
    public Product getProductById(@PathVariable int id) {
        return service.getById(id);
    }

    @PostMapping
    public Product createProduct(@RequestBody Product product) {
        return service.create(product);
    }

    @PutMapping("/{id}")
    public Product updateProduct(@PathVariable int id, @RequestBody Product product) {
        return service.update(id, product);
    }

    @DeleteMapping("/{id}")
    public String deleteProduct(@PathVariable int id) {
        service.delete(id);
        return "Product deleted successfully!";
    }
}
