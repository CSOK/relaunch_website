from django.urls import path
from .views import register, get_object



urlpatterns = [
    path('', register, name='register'),
    path('<int:pk>/', get_object, name='get_object'),

]

# Path: src/backend/register/serializer.py
