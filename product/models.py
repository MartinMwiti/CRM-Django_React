from django.db import models
from PIL import Image


class Product(models.Model):

    Qty_Choices = (
        ('250ml', '250ml'),
        ('500ml', '500ml'),
        ('1L', '1L'),
        ('5L', '5L'),
        ('20L', '20L')
    )
    name = models.CharField(max_length=200)
    available = models.BooleanField(default=True)
    description = models.TextField(blank=True)
    image = models.ImageField(
        default='default_product.jpg', upload_to='product_photos')
    category = models.CharField(max_length=200)
    qty_amount = models.CharField(
        max_length=20, choices=Qty_Choices, default='250ml')
    price = models.IntegerField()

    def __str__(self):
        return self.name

    # Resizing an image from the default 125px
    def save(self, *args, **kwargs):  # this method is run after our model is saved. In this func, i override the parent save class which run automatically
        super().save(*args, **kwargs)  # run save from our parent save class method

        # this will open the image of the current instance.
        img = Image.open(self.image.path)

        if img.height > 300 or img.width > 300:
            # set resize to 300px x 300px (can be changed to other figures)
            output_size = (300, 300)
            img.thumbnail(output_size)
            img.save(self.image.path)
