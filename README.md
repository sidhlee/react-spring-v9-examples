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
