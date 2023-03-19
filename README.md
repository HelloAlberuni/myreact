## Lesson 5
- Raw DOM elements are node (not object) but the React DOM elements are Object
- JSX itself a JavaScript expression
- To write JSX in multi like like HTML, we need to wrap those lines inside ();
```js
const index = 0;
const element = (
    <h1 className="heading" tabIndex={index}>
        Hello World
    </h1>
);
```

- Thnk React elemets like object, behind the schene the above elemet generate an object like this
```js
const elemento = {
    type: 'h1',
    props: {
        className: 'heading',
        tabIndex: 0,
        children: 'Hello World'
    }
}
```

- Values inside {} -> `{apiResponse}` eascaped automatically by react to protect from XSS attacks
- ReactElemet is the smallest building block
- The element we create in react is immeutable, that means not changeable. If we need to change, we will need to create a new element.

## Lession 6 - Component & Props
- We can't change react element, that's why component concept is created.
- React element is not a functional element, but we need functional element that we can chagne. This is why React Component concept is created.

```js
function clock(){
	return (
		<h1 className='heading' tabIndex={index}>
			<span className='text'>hello {new Date().toLocaleTimeString()}</span>
		</h1>
	);
}
```
- Here clock function is called as React Component. But the `<h1>` tag inside the `()` is called React Element. That's the difference.
- Whatever a component return is called React Element.
- the clock() function can be invoked as HTML syntax like `<clock />` which is a component.
- We can resuse components like `<img />` `<h1>` etc components.
- We can pass parameters in component like `<img src="">` `src` attribute.
- Component names should be start with uppercase letter

- To create component in react, there is another way which is `Class syntax` by which we can crete components also.
- Class is a stateful component.
- There is not state in functional component. We can only change the state of the state by only using props. Whish is only the one way.
- Class component provides the facility to change the state of the component by ownself.