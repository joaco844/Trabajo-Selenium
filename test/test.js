const webdriver = require('selenium-webdriver');
const By = webdriver.By;
const Key = webdriver.Key;

const driver = new webdriver.Builder()
  .forBrowser('chrome')  
  .build();

async function loginTest() {
  try{
  await driver.get('https://selenium-715a8.web.app/login');

  const username = await driver.findElement(By.id('email'));
  const password = await driver.findElement(By.id('password'));

  await username.sendKeys('test@gmail.com');  // Cambia el correo electrónico si es necesario
  await password.sendKeys('test', Key.RETURN);  // Ingresa la contraseña y presiona Enter

  const pageTitle = await driver.getTitle();
  if (pageTitle === 'login') {
    console.log('Inicio de sesión fallido.');
  } else {
    console.log('Inicio de sesión exitoso.');
  }
} finally {
  await driver.quit();
}
}

loginTest();
