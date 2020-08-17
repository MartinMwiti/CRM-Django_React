from django.db import models
import datetime
from PIL import Image


class Purchaser(models.Model):
    name = models.CharField(max_length=50)
    phone = models.CharField(max_length=20)
    email = models.EmailField(max_length=255, blank=True, null=True)
    image = models.ImageField(default='default.png', upload_to='customer_photos/%Y/%m/%d/')
    data_added = models.DateField(default=datetime.date.today)

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):  
        super().save(*args, **kwargs)  

        img = Image.open(self.image.path)

        if img.height > 300 or img.width > 300:
            output_size = (300, 300)
            img.thumbnail(output_size)
            img.save(self.image.path)


# Shipping Address(Profile)
class purchaserShippingDetail(models.Model):
    class country(models.TextChoices):
        KENYA = 'Kenya'

    class county(models.TextChoices):
        NAIROBI = 'Nairobi'
        MOMBASA = 'Mombasa'
        KISUMU = 'Kisumu'
        MACHAKOS = 'Machakos'
        KIAMBU = 'Kiambu'

    frequent_customer = models.BooleanField(default=False)
    owner = models.CharField(max_length=50)
    address = models.CharField(max_length=12, blank=True)
    zip_code = models.CharField(max_length=12, blank=True)
    description = models.TextField(blank=True)
    county = models.CharField(max_length=255, choices=county.choices, default=county.NAIROBI)
    location = models.CharField(max_length=255)
    country = models.CharField(max_length=50, choices=country.choices, default=country.KENYA)

    def __str__(self):
        return self.owner


# Func to auto increase invoice number
def increment_invoice_number():
    last_invoice = paymentInvoice.objects.all().order_by('id').last()

    if not last_invoice:
        return 'INV-0001'

    invoice_id = last_invoice.invoiceNo
    invoice_int = int(invoice_id.split('INV-')[-1])
    width = 4
    new_invoice_int = invoice_int + 1
    formatted = (width - len(str(new_invoice_int))) * \
        "0" + str(new_invoice_int)
    new_invoice_no = 'INV-' + str(formatted)
    return new_invoice_no


# Invoice Model
class paymentInvoice(models.Model):
    class paymentStatus(models.TextChoices):
        PENDING = 'Pending'
        PAID = 'Paid'
        DELIVERED = 'Delivered'

    class paymentMode(models.TextChoices):
        MPESA = 'Mpesa'
        BANK = 'Bank'
        CHEQUE = 'Cheque'
        CASH = 'Cash'

    invoiceNo = models.CharField(max_length=50, unique=True, default=increment_invoice_number)
    invoiceOwner = models.ForeignKey(Purchaser, on_delete=models.CASCADE, related_name="invoice_detail")
    product = models.CharField(max_length=50, blank=True)
    mode = models.CharField(max_length=20, choices=paymentMode.choices, default=paymentMode.MPESA)
    date = models.DateField(default=datetime.date.today)
    quantity = models.PositiveSmallIntegerField(blank=True, default=1)
    status = models.CharField(max_length=20, choices=paymentStatus.choices, default=paymentStatus.PENDING)
    payment_made = models.IntegerField(default=0)

    def __str__(self):
        return self.invoiceOwner.name
