# This is NAMASTE-REACT Course

# Namaste-Food Order App

Header
 - Logo
 - nav-items
Body
 - search
 - card-container
 - cards
Footer
 - copyright


________________________________________________

# React Notes

									### Namaste - React ###

_______________________________________________________________________________________________________________________
		 
1. Inception
		
	# React : 
				-- var parent = React.createElement(tagType,{props},[children]);
				-- This above react element is creates a js object.
	# ReactDOM	: 
				-- Link react object with root element
				-- var root = ReactDOM.createRoot(document.getElementById("root"));
				-- root.render(parent);

_______________________________________________________________________________________________________________________		 
		 
2. Ignite the React App :
		 
		 
	# npm - manages package
	# package.json - configuration for npm

	# Bundling : process of bundle html,css,js file together to make code production ready.
					-- caching
					-- cleaning
					-- minification
					-- chunking
					
	# Dependancies :
			-- Dev : 	-- need while developing 
						-- npm install -D parcel
			-- Normal : need in production
			
		^ : Minor + Patch
		~ : Only Patch
		
	# package-lock.json : It keeps the track of "exact" version of all Transitive dependancies
	# package.json		: It keeps the track of "approximate" version of all dependancies

	# node_module : database of the dependancies/packages that our project needs

	# Transitive Dependancies : 
		e.g. --> Parcel will have it's own dependancies --> those dependancies will have it's own dependancies
					so that's why node_module is heavy.
			
			 --> In node_module, Every project has it's own package.json file because it help to maintain configuration

	npx : When we need to execute the package 
			-- e.g. npx parcel index.html
			-- After execution of this command it will create dev build & host it on 1234 port.
			
	# Parcel :
			-- Bundler
			-- Dev build
			-- Host - Local Server
			-- HMR - Hot Module Repalcement
			-- Minification / Compression
			-- Bundling
			-- Image Optimization
			-- File watching algorithm - Written in c++
			-- Caching - Faster Builds - Parcel_Cache
			-- Consistent Hashing
			-- Code splitting
			-- Differential Bundling - Supports older browser
			-- Diagnostic
			-- Error Handling
			-- Https - SSL handling
			-- Tree Shaking - Remove unused code 
			-- Different Dev & Prod Builds --> dist folder
			-- Parcel is sort of manager of all other packages.
			
	# BrowsersList in package.json : Configure how may browsers versions needs to be configure to run the application.
			
_______________________________________________________________________________________________________________________			
			
3. Laying the foundation

	
			-- var parent = React.createElement(tagType,{props},[children]); --> Create the React Element, Which is Object
			-- var root = ReactDOM.createRoot(document.getElementById("root")); --> Takes the element convert it into HTML & Replace the root.
			-- root.render(parent);
			
			# JSX :
					-- JSX is not HTML inside javascript
					-- JSX is a HTML like Or XML like syntax
					-- JSX is not a part of react, We can create React applications without using JSX.
					-- var jsxHeading = <h1> This is a Heading </h1>; --> This is also React Element, Which is Object.
					*- JSX (Transpiled before it reaches the JS engine) --> Parcel --> Babel(Compiler)
					-- Babel => Compile JSX code into React Code.
					*- JSX ==(Parcel --> Babel)==> React.createElement() => React Element(Js Object) => HTML Element (Render)
					-- Attributes in JSX need to be give in camel case.
					-- Multiple lines of JSX can be wrapped inside the paranthesis ().
					
			# Component:
					-- It is reusable 
					-- Types : 1. Functional 2. Class
					
						# Functional Based Component:
							-- It is just a normal javascript function which returns piece of JSX.
							-- Always write first letter in capital letter.
							-- e.g. const HeaderComponent = () => 
										{
											return <h1 className="heading"> Heading Component From Funcational </h1>
										};
								root.render(<HeaderComponent/>);
								
					-- Component Composition:
							-- Composing two component into one another.
					-- Writting javascript inside JSX - {js code}
					-- We can render using - {}
						-- component inside component
						-- React Element inside component
						-- Component inside React Element
						-- React Element inside React Element
					
			# Cross Site Scripting : 
					-- Executing some malilcious js code inside {} JSX.
					-- JSX take care of all those things it will sanitize before execution of the code inside {}.
					
						
_______________________________________________________________________________________________________________________		

4. Talk is cheap, show me the code

			#Props :
					-- Nothing but the property
					-- Whenever we want to pass data from component to component then we can use Prop.
					-- Pass some dynamically data to component
					-- Passing props to a component is like a passing a argument to a function
					
			# Config Driven UI:
					-- UI is build based on configuration data which is send by backend.
					
			# Key While looping :
					-- If we are not maintaining keys at that time react will re-render all cards, Bad performance.
						because react will don't know which one is new one to render.
					-- If we give key, at that time it will maintain the the previous cards state & just render newly added one.
					-- Never use index as the key because order may change for array items so index will also change.
					-- Not using keys (not acceptable) << Index as key << Unique Id (Best Practice)
						
						
_______________________________________________________________________________________________________________________		

5. Let's get hooked

			# Export :
					-- Default :  
							-- When we want to export 1 element from file.
							-- export: export default Component;
							-- import: import Component from "path";
							
					-- named export : 
							-- When we want to export more than 1 element from file.
							-- export: export const Component;
							-- import: import {Component} from "path";
							
			# Why React is Faster ? :
					-- Faster, Efficient DOM Manipulation
					-- Virtual DOM
							-- Representation of actual DOM.
							-- It is React element means normal javascript object.
					-- Diff Algorithm
							-- It finds out the difference between old Virtual DOM & new Virtual DOM, it will actual update the DOM
								on every render cycle.
					-- Reconciliation (React Fiber):
							-- React keeps an eye on state variable, 
							   when there is change in any state variable, 
							   react will find the difference between virtual DOM (js Object)
							   & it will re-render our component.

			
			# React Hooks :
					-- Hooks are nothing but the simple javascript utility functions.
					-- It tries to keep the UI layer in sync with data.
					
				-- useState() : 
						-- It maintain the state of the component.
						-- Superpowerful state variables in react.
						-- Whenever state variable updates it re-render the component.
						-- Create state variable ===>  const [listOfRestaurants] = useState(defaultValue);
						-- Update state variable ===>  const [listOfRestaurants,setListOfRestaurants] = useState(defaultValue);
												 ===>  setListOfRestaurants(Updated Value);
												 ===>  [listOfRestaurants,setListOfRestaurants] --> Destructure the array 
												 
				-- useEffect() :
			