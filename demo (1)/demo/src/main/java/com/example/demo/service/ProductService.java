package com.example.demo.service;

import com.example.demo.model.Product;
import com.example.demo.repository.ProductRepository;
import org.springframework.stereotype.Service;


import java.util.List;

@Service
public class ProductService {
    private final ProductRepository repository;

    public ProductService(ProductRepository repository) {
        this.repository = repository;
    }

    public List<Product> getAll() {
        return repository.findAll();
    }

    public Product getById(int id) {
        return repository.findById(id).orElse(null);
    }

    public Product create(Product product) {
        return repository.save(product);
    }

    public Product update(int id, Product productDetails) {
        Product product = repository.findById(id).orElse(null);
        if (product != null) {
            product.setName(productDetails.getName());
            product.setPrice(productDetails.getPrice());
            return repository.save(product);
        }
        return null;
    }

    public void delete(int id) {
        repository.deleteById(id);
    }
}
