// 1단계 메서드당 들여쓰기 한 번
interface Product {
  isActive: boolean;
  stock: number;
}

// Before
export class BeforeProductRegisterProcessor {
  processRegister(products: Product[]) {
    if (products.length !== 0) {
      products.forEach((product) => {
        if (product.stock > 0 && product.isActive) {
          console.log("product register!");
        }
      });
    }
  }
}

// After
export class AfterProductRegisterProcessor {
  processRegister(products: Product[]) {
    if (this.hasNoProducts(products)) {
      return;
    }

    products.forEach((product) => this.processProduct(product));
  }

  hasNoProducts(products: Product[]): boolean {
    return products.length === 0;
  }

  isRegisterable(product: Product): boolean {
    return product.isActive && product.stock > 0;
  }

  processProduct(product: Product): void {
    if (!this.isRegisterable(product)) {
      return;
    }

    this.registerProduct(product);
  }

  registerProduct(_product: Product) {
    console.log("product register!");
  }
}
