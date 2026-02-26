from django.contrib.auth import authenticate
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from .serializers import RegisterSerializer

def set_token_cookies(response, refresh):
    response.set_cookie("access", str(refresh.access_token), httponly=True)
    response.set_cookie("refresh", str(refresh), httponly=True)

@api_view(["POST"])
def register(request):
    serializer = RegisterSerializer(data=request.data)

    if serializer.is_valid():
        user = serializer.save()
        refresh = RefreshToken.for_user(user)

        res = Response({"success": True})
        set_token_cookies(res, refresh)
        return res

    return Response(serializer.errors, status=400)

@api_view(["POST"])
def login(request):
    user = authenticate(
        username=request.data["username"],
        password=request.data["password"]
    )

    if not user:
        return Response({"error": "Invalid credentials"}, status=401)

    refresh = RefreshToken.for_user(user)
    res = Response({"success": True})
    set_token_cookies(res, refresh)

    return res

@api_view(["POST"])
def logout(request):
    res = Response({"success": True})
    res.delete_cookie("access")
    res.delete_cookie("refresh")
    return res

@api_view(["GET"])
@permission_classes([IsAuthenticated])
def profile(request):
    return Response({"username": request.user.username})