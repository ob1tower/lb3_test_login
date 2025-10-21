from selenium import webdriver
from selenium.webdriver.firefox.service import Service
from selenium.webdriver.firefox.options import Options
from webdriver_manager.firefox import GeckoDriverManager
import time

def test_open_browser_page():

    driver_instance = None

    try:
        # Настройка опций для Firefox
        options = Options()
        options.add_argument("--start-maximized")

        # Создание сервиса с помощью WebDriver Manager
        firefox_service = Service(GeckoDriverManager().install())

        # Запуск браузера
        driver_instance = webdriver.Firefox(service=firefox_service, options=options)

        # Переход на страницу
        url = "https://www.google.com"
        driver_instance.get(url)
        print(f"Страница успешно открыта: {driver_instance.title}")

        # Небольшая задержка
        time.sleep(3)

    except Exception as error:
        print(f"Возникла ошибка: {error}")

    finally:
        # Закрытие браузера, если он был создан
        if driver_instance:
            driver_instance.quit()
            print("Браузер был закрыт")
