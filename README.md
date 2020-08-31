# React Spring Examples (v9)

## Transitioning between components

Mounting component will enter as soon as the previous component starts leaving. This causes entering component to be rendered next to the leaving component and suddenly change its position when the previous component unmounts.

You can add absolute-positioning to the animated container to avoid this:

```tsx
const location = useLocation();
const transition = useTransition(location, {
  from: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
  },
  leave: {
    opacity: 0,
  },
});
return (
  <>
    <GlobalStyle />
    <HomeLink to="/">ReactSpring</HomeLink>
    {transition((style, location) => (
      <Suspense fallback={<div>Loading...</div>}>
        <animated.div
          style={{
            ...style,
            position: 'absolute',
            width: '100%',
            height: '100%',
          }}
        >
          <Switch location={location}>
            <Route path="/" exact>
              <Navigation />
            </Route>
            <Route path="/message-hub" component={MessageHub} />
            <Route path="/trees" component={Trees} />
            <Route path="/dropdown-menu" component={Navbar} />
            <Route path="/carousel" component={Carousel} />
          </Switch>
        </animated.div>
      </Suspense>
    ))}
  </>
);
```

## Shorthand Props

Shorthand for interpolating values into transform string.

- `x`, `y`, `z`
- `rotate`, `rotateX`, `rotateY`, `rotate3d`
- `scale`, `scaleX`, `scaleY`, `scale3d`
- and some more...

## Gesture State

- **movement** - This is what you're going to use most of the time. At the beginning of the drag gesture, it is reset to `[0, 0]`. Use this if your element returns back to its original position at the end of the gesture.
- **offset** - Use this if you want your element to start from where they were left off (not resetting).
- **down** - `true` when a mouse button of touch is down.
- **direction** - returns `[cos(angle), sin(angle)]`
- **distance** - returns the absolute value of the movement.
