
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ProductCategory } from "@/utils/types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

interface CategoryFormProps {
  category: ProductCategory | null;
  onSubmit: (category: ProductCategory) => void;
  onCancel: () => void;
}

const categorySchema = z.object({
  name: z.string().min(3, { message: "Category name must be at least 3 characters" }),
});

export const CategoryForm = ({ category, onSubmit, onCancel }: CategoryFormProps) => {
  const form = useForm<z.infer<typeof categorySchema>>({
    resolver: zodResolver(categorySchema),
    defaultValues: {
      name: category || '',
    },
  });

  const handleSubmit = (values: z.infer<typeof categorySchema>) => {
    onSubmit(values.name as ProductCategory);
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
              <FormLabel>Category Name</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Enter category name" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-end space-x-2 pt-4">
          <Button type="button" variant="outline" onClick={onCancel}>Cancel</Button>
          <Button type="submit">{category ? 'Update' : 'Create'} Category</Button>
        </div>
      </form>
    </Form>
  );
};
