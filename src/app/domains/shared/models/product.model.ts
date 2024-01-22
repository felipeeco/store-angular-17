import { SafeResourceUrl } from '@angular/platform-browser';
export interface Product {
    id: number,
    title: string,
    price: number,
    images: string[];
    creationAt: string;
}