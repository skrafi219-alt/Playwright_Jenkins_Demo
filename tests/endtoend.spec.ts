import {test,expect} from '@playwright/test';

test('end to end UI', async ({page})=>{

await page.goto("https://rahulshettyacademy.com/client/");
await page.locator("#userEmail").fill("rafi.tgcs219@gmail.com");
await page.locator("#userPassword").fill("MBxanptFWYri5$k");
await page.locator("#login").click();
const productName="ZARA COAT 3";
await page.locator("div.card-body").first().waitFor();
const products=page.locator("div.card-body");

for(let i=0;i<=await products.count();i++){

  if(await page.locator("div.card-body").locator("b").nth(i).textContent()===productName){

    await page.locator("text=' Add To Cart'").nth(i).click();
    break;
  }
}

await page.locator("[routerlink='/dashboard/cart']").click();
await expect(page.locator("//h3[text()='ZARA COAT 3']")).toHaveText("ZARA COAT 3");

});

//add endtoend test, removed login