// Adapted from https://www.npmjs.com/package/react-slide-routes
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { useMemo, useRef, cloneElement, createElement, Children, FC } from 'react';
import { Location } from 'history';
import { Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

type AnimationTiming = 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'linear';

type SlideRoutesProps = {
  location: Location;
  duration?: number;
  timing?: AnimationTiming;
  children: JSX.Element[] | JSX.Element;
};

const getCss = (duration: number, timing: AnimationTiming, direction: string) => css`
  display: grid;
  height: 100%;
  .item {
    grid-area: 1 / 1 / 2 / 2;
    &:not(:only-child) {
      &.${direction}-enter-active, &.${direction}-exit-active {
        transition: transform ${duration}ms ${timing};
        overflow: hidden;
      }
    }
  }
  &.slide {
    // back
    .back-enter {
      transform: translateX(-100%);
    }
    .back-enter-active {
      transform: translateX(0);
    }
    .back-exit {
      transform: translateX(0);
    }
    .back-exit-active {
      transform: translateX(100%);
    }
    // forward
    .forward-enter {
      transform: translateX(100%);
    }
    .forward-enter-active {
      transform: translateX(0);
    }
    .forward-exit {
      transform: translateX(0);
    }
    .forward-exit-active {
      transform: translateX(-100%);
    }
  }
`;

const SlideRoutes: FC<SlideRoutesProps> = ({ location, duration = 200, timing = 'ease', children }: SlideRoutesProps) => {
  const { pathname } = location;
  const hasMount = useRef(false);
  const prevPath = useRef<string>();
  const direction = useRef('');

  const selfList = useRef<string[]>([]);
  const selfKey = '::slide::history::';

  if (!hasMount.current) {
    // mount
    hasMount.current = true;

    const cacheList = sessionStorage.getItem(selfKey);
    if (!cacheList) {
      selfList.current = [pathname];
      prevPath.current = pathname;
      sessionStorage.setItem(selfKey, JSON.stringify(selfList.current));
    } else {
      selfList.current = JSON.parse(cacheList);
      prevPath.current = selfList.current[selfList.current.length - 1];
    }
  } else {
    // update
    if (prevPath.current !== pathname) {
      const nextIndex = selfList.current.lastIndexOf(pathname);

      if (nextIndex === -1) {
        direction.current = 'forward';
        selfList.current.push(pathname);
      } else {
        direction.current = 'back';
        selfList.current.length = nextIndex + 1;
      }

      sessionStorage.setItem(selfKey, JSON.stringify(selfList.current));

      prevPath.current = pathname;
    }
  }

  const routeList = useMemo(() => {
    return Children.map(children, (child) => {
      if (!child) return child;

      const { render, component, ...restProps } = child.props;
      if (!render && !component) return child;

      const element = render ? render() : createElement(component);
      if (element.props.replace === true) return child;

      const newRender = () => <div className="item">{element}</div>;
      return { ...child, props: { ...restProps, render: newRender } };
    });
  }, [children]);

  return (
    <TransitionGroup
      className={`slide-routes slide`}
      childFactory={(child) => cloneElement(child, { classNames: direction.current })}
      css={getCss(duration, timing, direction.current)}
    >
      <CSSTransition key={pathname} {...{ timeout: duration }}>
        <Switch location={location}>{routeList}</Switch>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default SlideRoutes;
