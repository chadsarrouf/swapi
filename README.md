# Running the Swapi App

1. Make sure you have laravel/php, nodejs and composer installed
2. Clone the repo locally
3. In the terminal, access the swapi app directory 
4. Run `composer install` to install php dependencies
5. Run `npm install` to install js dependencies. *You may get some package conflicts due to the Vite package. If so, run `npm install --force` to fix it.
6. Run `php artisan serve` to start the dev server
7. Run `npm run dev` to start the frontend build
8. Open `http://127.0.0.1:8000/` in your browser, the app should be running.



# Test Instructions


With the use of the provided API endpoint, create an application to present the user with
an interactive user interface.
The application should support the following features:
1. A user can view a list of people.
2. A user can view a list of planets.
3. A user can view a list of starships.
4. A user can search for a person.


Requirements
1. Use the following as your online API: https://swapi.dev/documentation
2. The API above should be wrapped in a backend REST API client with the 4 endpoints
required for the use cases above.
3. The UI should preferably work as a no-refresh, Single Page Application. Use of a JS
Framework is highly recommended. (React, Vue, Angular

Instructions
1. Use the Backend programming language and/or framework solution of your choice.
2. You can also use any Javascript library or plugin you desire (or none at all!).

Delivery

Send us a GitHub or BitBucket repository of your work with all the files necessary (with
instructions as needed) to run the application in a browser. You may optionally send us a zip
package of the files or an online hosted version of the files.
If you have any questions, please feel free to contact us.
