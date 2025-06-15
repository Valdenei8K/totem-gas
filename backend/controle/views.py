from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response

# Tenta importar a GPIO, se não estiver disponível (como no Windows), cria um mock
try:
    import RPi.GPIO as GPIO
    GPIO_AVAILABLE = True
except ModuleNotFoundError:
    GPIO_AVAILABLE = False

    # Cria uma simulação dos métodos da GPIO
    class MockGPIO:
        BCM = 'BCM'
        OUT = 'OUT'

        def setwarnings(self, flag):
            print(f"GPIO setwarnings({flag})")

        def setmode(self, mode):
            print(f"GPIO setmode({mode})")

        def setup(self, pin, mode):
            print(f"GPIO setup(pin={pin}, mode={mode})")

        def output(self, pin, state):
            print(f"GPIO output(pin={pin}, state={state})")

    GPIO = MockGPIO()

# Configurações da GPIO
GPIO.setwarnings(False)
GPIO.setmode(GPIO.BCM)
GPIO.setup(2, GPIO.OUT)

@api_view(['POST'])
def ligar_rele(request):
    GPIO.output(2, True)
    return Response({'status': 'ligado'})

@api_view(['POST'])
def desligar_rele(request):
    GPIO.output(2, False)
    return Response({'status': 'desligado'})
