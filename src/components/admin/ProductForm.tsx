
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Product, ProductCategory } from "@/utils/types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

interface ProductFormProps {
  product: Product | null;
  categories: ProductCategory[];
  onSubmit: (product: Product) => void;
  onCancel: () => void;
}

const productSchema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters" }),
  price: z.coerce.number().min(0, { message: "Price must be a positive number" }),
  category: z.string(),
  description: z.string().min(10, { message: "Description must be at least 10 characters" }),
  imageUrl: z.string().url({ message: "Must be a valid URL" }),
  inStock: z.boolean(),
  features: z.string(),
  specifications: z.string(),
});

export const ProductForm = ({ product, categories, onSubmit, onCancel }: ProductFormProps) => {
  // Convert product features and specifications to string for the form
  const featuresString = product?.features ? product.features.join('\n') : '';
  const specificationsString = product?.specifications ? 
    Object.entries(product.specifications).map(([key, value]) => `${key}: ${value}`).join('\n') : '';

  const form = useForm<z.infer<typeof productSchema>>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      name: product?.name || '',
      price: product?.price || 0,
      category: product?.category || '',
      description: product?.description || '',
      imageUrl: product?.imageUrl || '',
      inStock: product?.inStock ?? true,
      features: featuresString,
      specifications: specificationsString,
    },
  });

  const handleSubmit = (values: z.infer<typeof productSchema>) => {
    // Parse features string to array
    const features = values.features.split('\n').filter(Boolean);
    
    // Parse specifications string to object
    const specifications: Record<string, string> = {};
    values.specifications.split('\n').forEach(spec => {
      const [key, value] = spec.split(':').map(s => s.trim());
      if (key && value) {
        specifications[key] = value;
      }
    });

    const newProduct: Product = {
      id: product?.id || Date.now().toString(),
      slug: product?.slug || values.name.toLowerCase().replace(/\s+/g, '-'),
      rating: product?.rating || 4.5,
      views: product?.views || 0,
      purchases: product?.purchases || 0,
      name: values.name,
      price: values.price,
      category: values.category as ProductCategory,
      description: values.description,
      imageUrl: values.imageUrl,
      inStock: values.inStock,
      features,
      specifications,
    };

    onSubmit(newProduct);
    form.reset();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Product Name" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Price</FormLabel>
              <FormControl>
                <Input type="number" step="0.01" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  placeholder="Product description"
                  className="resize-none min-h-[100px]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="imageUrl"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Image URL</FormLabel>
              <FormControl>
                <Input {...field} placeholder="https://example.com/image.jpg" />
              </FormControl>
              <FormDescription>URL to the product image</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="features"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Features</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  placeholder="Enter features (one per line)"
                  className="resize-none min-h-[100px]"
                />
              </FormControl>
              <FormDescription>Enter one feature per line</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="specifications"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Specifications</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  placeholder="Dimension: 10x20x30cm
Weight: 5kg
Material: Aluminum"
                  className="resize-none min-h-[100px]"
                />
              </FormControl>
              <FormDescription>Enter specifications in Key: Value format (one per line)</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="inStock"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
              <div className="space-y-0.5">
                <FormLabel>In Stock</FormLabel>
                <FormDescription>
                  Is this product available for purchase?
                </FormDescription>
              </div>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <div className="flex justify-end space-x-2 pt-4">
          <Button type="button" variant="outline" onClick={onCancel}>Cancel</Button>
          <Button type="submit">{product ? 'Update' : 'Create'} Product</Button>
        </div>
      </form>
    </Form>
  );
};
