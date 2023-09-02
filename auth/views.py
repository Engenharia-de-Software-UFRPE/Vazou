from .serializers import MyToken, RegisterSerializer
from rest_framework.permissions import AllowAny, IsAdminUser, IsAuthenticated
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import generics
from django.contrib.auth.models import User

# Create your views here.
class MyTokenPairView(TokenObtainPairView):
    permission_classes = (AllowAny,)
    serializer_class = MyToken

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = [IsAdminUser]
    serializer_class = RegisterSerializer

