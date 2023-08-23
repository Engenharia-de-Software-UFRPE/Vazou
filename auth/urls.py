from django.urls import path
from auth.views import MyTokenPairView, RegisterView
from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [
    path('login/', MyTokenPairView.as_view(), name='TokenPairView'),
    path('login/refresh', TokenRefreshView.as_view(), name='TokenRefresh'),
    path('register/', RegisterView.as_view(), name='AuthRegistro')
]