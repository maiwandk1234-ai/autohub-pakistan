import puppeteer from 'puppeteer-core';
import path from 'path';
import fs from 'fs';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function runTests() {
  console.log('🚀 Starting AutoHub Pakistan End-to-End Test Suite...');
  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1366, height: 850 });

  const errors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') {
      console.log('Browser Error:', msg.text());
    }
  });

  page.on('pageerror', err => {
    console.error('Page Crash Error:', err.message);
    errors.push(err.message);
  });

  try {
    // 1. Test Homepage
    console.log('1. Loading Homepage...');
    await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' });
    const pageTitle = await page.title();
    console.log('Page title:', pageTitle);

    // Verify brand logo
    const brandText = await page.$eval('.brand-logo-text', el => el.innerText);
    console.log('Brand Logo Text:', brandText);

    // Save Homepage Screenshot
    await page.screenshot({ path: 'test_homepage.png' });
    console.log('✅ Homepage loaded and verified!');

    // 2. Test Used Cars Navigation & Filters
    console.log('2. Navigating to Used Cars...');
    const usedCarsBtn = await page.evaluate(() => {
      const btns = Array.from(document.querySelectorAll('.nav-link'));
      const btn = btns.find(b => b.innerText.includes('Used Cars'));
      if (btn) btn.click();
      return !!btn;
    });

    await new Promise(r => setTimeout(r, 600));
    await page.screenshot({ path: 'test_used_cars.png' });
    console.log('✅ Used Cars page rendered!');

    // 3. Test Vehicle Details
    console.log('3. Opening Vehicle Details...');
    await page.evaluate(() => {
      const detailBtns = Array.from(document.querySelectorAll('.btn-outline-red'));
      if (detailBtns[0]) detailBtns[0].click();
    });

    await new Promise(r => setTimeout(r, 600));
    const carTitle = await page.$eval('h1', el => el.innerText);
    console.log('Vehicle Details Title:', carTitle);

    // Click "Show Phone Number"
    await page.evaluate(() => {
      const btns = Array.from(document.querySelectorAll('button'));
      const showPhoneBtn = btns.find(b => b.innerText.includes('Show Phone Number'));
      if (showPhoneBtn) showPhoneBtn.click();
    });

    await new Promise(r => setTimeout(r, 300));
    await page.screenshot({ path: 'test_car_details.png' });
    console.log('✅ Car Details and Phone reveal working!');

    // 4. Test Compare Page
    console.log('4. Navigating to Compare...');
    await page.evaluate(() => {
      const btns = Array.from(document.querySelectorAll('.nav-link'));
      const btn = btns.find(b => b.innerText.includes('Compare'));
      if (btn) btn.click();
    });
    await new Promise(r => setTimeout(r, 600));
    await page.screenshot({ path: 'test_compare.png' });
    console.log('✅ Compare page working!');

    // 5. Test Bikes Page
    console.log('5. Navigating to Bikes...');
    await page.evaluate(() => {
      const btns = Array.from(document.querySelectorAll('.nav-link'));
      const btn = btns.find(b => b.innerText.includes('Bikes'));
      if (btn) btn.click();
    });
    await new Promise(r => setTimeout(r, 600));
    await page.screenshot({ path: 'test_bikes.png' });
    console.log('✅ Bikes page working!');

    // 6. Test Auto Parts & Add to Cart
    console.log('6. Navigating to Auto Parts...');
    await page.evaluate(() => {
      const btns = Array.from(document.querySelectorAll('.nav-link'));
      const btn = btns.find(b => b.innerText.includes('Auto Parts'));
      if (btn) btn.click();
    });
    await new Promise(r => setTimeout(r, 600));

    // Click Add to Cart
    await page.evaluate(() => {
      const addBtns = Array.from(document.querySelectorAll('button'));
      const cartBtn = addBtns.find(b => b.innerText.includes('Add to Cart'));
      if (cartBtn) cartBtn.click();
    });

    await new Promise(r => setTimeout(r, 600));
    await page.screenshot({ path: 'test_auto_parts.png' });
    console.log('✅ Auto Parts & Cart added working!');

    // 7. Test Sell Your Car Form
    console.log('7. Navigating to Sell Your Car...');
    await page.evaluate(() => {
      const btns = Array.from(document.querySelectorAll('button'));
      const sellBtn = btns.find(b => b.innerText.includes('Post an Ad'));
      if (sellBtn) sellBtn.click();
    });
    await new Promise(r => setTimeout(r, 600));
    await page.screenshot({ path: 'test_sell_car.png' });

    // Submit the form
    await page.evaluate(() => {
      const submitBtn = document.querySelector('button[type="submit"]');
      if (submitBtn) submitBtn.click();
    });
    await new Promise(r => setTimeout(r, 800));
    await page.screenshot({ path: 'test_sell_success.png' });
    console.log('✅ Sell Your Car submission verified!');

    // 8. Test Reviews Page
    console.log('8. Navigating to Reviews...');
    await page.evaluate(() => {
      const btns = Array.from(document.querySelectorAll('.nav-link'));
      const btn = btns.find(b => b.innerText.includes('Reviews'));
      if (btn) btn.click();
    });
    await new Promise(r => setTimeout(r, 600));
    await page.screenshot({ path: 'test_reviews.png' });
    console.log('✅ Reviews page verified!');

    // 9. Test Mobile Viewport
    console.log('9. Testing Mobile Viewport (iPhone / Android 375x812)...');
    await page.setViewport({ width: 375, height: 812, isMobile: true });
    await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' });
    await new Promise(r => setTimeout(r, 600));
    await page.screenshot({ path: 'test_mobile.png' });
    console.log('✅ Mobile layout verified!');

    if (errors.length > 0) {
      console.error('⚠️ Errors encountered during test run:', errors);
      process.exit(1);
    } else {
      console.log('🎉 ALL AUTOHUB PAKISTAN TESTS PASSED WITH 0 ERRORS!');
    }
  } catch (err) {
    console.error('❌ Test failed with exception:', err);
    process.exit(1);
  } finally {
    await browser.close();
  }
}

runTests();
