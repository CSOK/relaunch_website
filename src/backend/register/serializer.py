from rest_framework.serializers import ModelSerializer
from .models import MemberRegister


class MemberRegisterSerializer(ModelSerializer):
    class Meta:
        model = MemberRegister
        fields = '__all__'