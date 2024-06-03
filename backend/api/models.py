from django.db import models

# Create your models here.
class Product(models.Model):
    p_name = models.CharField(max_length=30)
    p_category = models.CharField(max_length=30)
    p_desc = models.CharField(max_length=100)
    p_price = models.IntegerField(default=0)

    def __str__(self):
        return self.p_name


class Notes(models.Model):
    body = models.TextField(null=True,blank=True)
    updated_on =models.DateTimeField(auto_now=True)
    created_on =models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.body[0:20]
