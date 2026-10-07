AutoHub Pakistan
Product Requirements Document (PRD)
Automotive Marketplace Website — PakWheels-Inspired Clone
• Project Type: Responsive Web Application
• Development Approach: Vibe Coding with Antigravity
• Reference Website: https://www.pakwheels.com/
• Initial Data: Original publicly accessible data where permitted; realistic mock data when original
data is unavailable
• Brand: AutoHub Pakistan
• Currency: PKR (Rs.)
1. Project Overview
AutoHub Pakistan is an automotive marketplace website inspired by the structure and user
experience of PakWheels.
The website allows users to explore used and new cars, bikes, auto parts, vehicle information,
reviews, and automotive content.
The project should recreate the overall functionality and user experience while using AutoHub
Pakistan's own branding.
2. Main Goals
• Create a professional Pakistani automotive marketplace.
• Provide an easy vehicle-search experience.
• Display realistic vehicle listings.
• Allow users to view detailed vehicle information.
• Provide buying and selling related features.
• Make the website fully responsive.
• Build reusable frontend components.
• Keep the architecture ready for future backend/database integration.
3. Homepage
Create a visually attractive homepage containing:
• Header/navigation
• AutoHub Pakistan logo
• Search area
• Used Cars search
Page 1
AutoHub Pakistan — PRD
• New Cars section
• Bikes section
• Featured vehicle listings
• Popular car brands
• Popular models
• Car comparison section
• Latest automotive news/reviews
• Auto parts section
• Sell Your Car CTA
• Footer
4. Navigation
Main navigation should include:
• Cars
• Bikes
• Auto Parts
• New Cars
• Car Comparison
• Reviews
• News
• Sell Your Car
• Sign In
• Post an Ad
Create responsive navigation for mobile devices.
5. Used Cars
Users should be able to browse used cars.
Filters
Include:
• Make/Brand
• Model
• City
• Price range
• Year
Page 2
AutoHub Pakistan — PRD
• Mileage
• Fuel type
• Transmission
• Body type
Listing Cards
Each vehicle card should display:
• Vehicle image
• Make and model
• Year
• Mileage
• Transmission
• Price
• City
• Favorite button
• View Details button
6. Vehicle Details
Create a detailed vehicle page containing:
• Multiple vehicle images
• Vehicle name
• Price
• Location
• Year
• Mileage
• Engine
• Fuel type
• Transmission
• Body type
• Description
• Seller information
• Contact Seller button
• WhatsApp/contact CTA
• Save/Favorite button
• Similar vehicles
Page 3
AutoHub Pakistan — PRD
7. Sell Your Car
Create a form where a user can prepare a vehicle advertisement.
Fields:
• Brand
• Model
• Year
• Price
• Mileage
• City
• Condition
• Fuel type
• Transmission
• Engine
• Description
• Contact information
• Upload vehicle images
For the first version, the form can work with frontend/local data only.
8. New Cars
Create a section for new vehicles.
Display:
• Brands
• Models
• Prices
• Specifications
• Images
• Reviews
• View Details
Include popular Pakistani-market brands and models.
9. Bikes
Create a dedicated bike marketplace.
Include:
Page 4
AutoHub Pakistan — PRD
• Bike listings
• Brand filters
• Model filters
• Price filters
• City filters
• Bike details page
• Seller/contact information
10. Auto Parts
Create an auto-parts section containing:
• Parts categories
• Product cards
• Product images
• Product name
• Price
• Vehicle compatibility
• Search/filter
• Product details
11. Car Comparison
Allow users to select two or more vehicles and compare:
• Price
• Engine
• Horsepower
• Mileage
• Transmission
• Fuel type
• Dimensions
• Features
• Safety features
Use a clean comparison table.
12. Reviews & News
Create automotive content sections for:
Page 5
AutoHub Pakistan — PRD
Reviews
• Car reviews
• Bike reviews
• Ratings
• Specifications
• Pros/cons
• Images
News
• Automotive news cards
• Headlines
• Images
• Date
• Category
• Read More
13. User Interactions
Frontend should support:
• Search
• Filtering
• Sorting
• Favorite/save listings
• View details
• Compare vehicles
• Navigation
• Post-an-ad form
• Image upload UI
• Contact seller UI
• Responsive menus
• Buttons and cards with proper interactions
14. Data & Assets Strategy
Original Data First
Use publicly accessible information from the reference website where it can be legally and technically
reused.
For vehicle information, use realistic Pakistani-market information.
Page 6
AutoHub Pakistan — PRD
If Original Data Is Unavailable
Use realistic mock data.
Examples:
• Vehicle names
• Prices
• Cities
• Specifications
• Seller information
• Reviews
• News
Do not leave important sections empty just because original data cannot be accessed.
Assets
Inspect the reference website for required visual assets.
Use downloadable/publicly accessible assets where their reuse is permitted.
Store project assets inside:
/assets
If an original asset cannot be accessed or reused:
• Create/use an original equivalent, or
• Use an appropriate licensed asset, or
• Use realistic placeholder/mock imagery.
Do not copy PakWheels branding or logo.
15. Technical Requirements
Use:
• React
• JavaScript
• HTML
• CSS/Tailwind CSS
• Reusable React components
• Local/mock data initially
• Responsive design
Suggested structure:
src/
• components
Page 7
AutoHub Pakistan — PRD
• pages
• data
• assets
• layouts
• services
• utils
Keep the code organized so Supabase/backend can be added later.
16. Responsive Design
The website must work properly on:
• Desktop
• Laptop
• Tablet
• Mobile
Cards, filters, navigation, images, forms, and comparison tables must adapt to smaller screens.
17. Visual Design
Use a professional automotive marketplace style.
Design requirements:
• Clean layout
• Strong search section
• Professional cards
• High-quality vehicle imagery
• Clear typography
• Good spacing
• Attractive CTAs
• Consistent buttons
• Responsive layout
• Professional footer
Do not make an exact pixel-for-pixel copy of PakWheels. Use it as the structural and UX reference
while creating original AutoHub Pakistan branding.
18. Future Backend
The first version should focus on the frontend.
Page 8
AutoHub Pakistan — PRD
Keep the project ready for future:
• Supabase database
• Authentication
• User accounts
• Real vehicle listings
• Seller accounts
• Favorites stored in database
• Real ad posting
• Image storage
• Search/database queries
19. Final Deliverable
The completed frontend should provide a realistic automotive marketplace experience where a user
can:
1 Open the homepage.
2 Search vehicles.
3 Filter listings.
4 Open a vehicle.
5 View complete details.
6 Save a vehicle.
7 Compare vehicles.
8 Browse new cars and bikes.
9 Explore auto parts.
10 Read reviews/news.
11 Prepare an advertisement.
12 Navigate smoothly on mobile and desktop.
The final application should feel like a functional Pakistani automotive marketplace rather than a
static collection of pages.
Page 9
AutoHub Pakistan — PRD
