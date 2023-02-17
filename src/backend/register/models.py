from django.db import models



class MemberRegister(models.Model):
    name = models.CharField(max_length=200)
    email = models.EmailField(max_length=200)
    phone = models.CharField(max_length=200)
    course = models.CharField(max_length=200)



    def ___str__(self):
        return self.name
    
