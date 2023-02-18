from django.shortcuts import render
from .models import MemberRegister
from rest_framework import status
from rest_framework.decorators import api_view
from .serializer import MemberRegisterSerializer
from rest_framework.response import Response
from django.http import Http404

# Create your views here.


@api_view(['GET', 'POST'])
def register(request):
    if request.method == 'GET':
        member = MemberRegister.objects.all()
        serializer = MemberRegisterSerializer(member, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = MemberRegisterSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def get_object(request, pk):
    if request.method == 'GET':
        try:
            member = MemberRegister.objects.get(pk=pk)
        except MemberRegister.DoesNotExist:
            raise Http404
        serializer = MemberRegisterSerializer(member)
        return Response(serializer.data)

    elif request.method == 'PUT':
        try:
            member = MemberRegister.objects.get(pk=pk)
        except MemberRegister.DoesNotExist:
            raise Http404
        serializer = MemberRegisterSerializer(member, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        try:
            member = MemberRegister.objects.get(pk=pk)
        except MemberRegister.DoesNotExist:
            raise Http404
        member.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    
    