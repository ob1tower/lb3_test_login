from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from webdriver_manager.chrome import ChromeDriverManager

class TestLoginPage:
    """
    Автотест страницы логина
    """
    def setup_method(self):
        """
        Открытие браузера перед тестом
        """
        chrome_service = Service(ChromeDriverManager().install())
        self.driver = webdriver.Chrome(service=chrome_service)
        self.wait = WebDriverWait(self.driver, 30)

    def teardown_method(self):
        """
        Закрытие браузера после теста
        """
        self.driver.quit()

    def test_successful_login(self):
        """
        Ввод валидных данных и проверка успешного входа
        """
        self.driver.get("http://localhost:5173/")

        # Ждем появления полей ввода
        login_input = self.wait.until(
            EC.visibility_of_element_located((By.ID, "username"))
        )
        password_input = self.wait.until(
            EC.visibility_of_element_located((By.ID, "password"))
        )
        submit_btn = self.wait.until(
            EC.element_to_be_clickable((By.ID, "login-button"))
        )

        login_input.send_keys("user")
        password_input.send_keys("user123")
        submit_btn.click()

        logout_btn = self.wait.until(
            EC.visibility_of_element_located((By.ID, "logout-button"))
        )
        assert logout_btn.is_displayed()
