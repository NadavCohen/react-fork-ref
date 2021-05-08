# react-fork-ref

A small utility function that enables you to pass multiple ref functions / objects to a single react element and maintain them.
Tested on `react@16.8.0` but is possibly compatible with older versions. 

# Installation

Install using yarn or npm

```
yarn add react-fork-ref
npm install react-fork-ref --save
```

# Usage

Function Component

```jsx typescript
import {FC, useRef, Ref} from "react"
import forkRef from "react-fork-ref";

interface SampleComponentProps {
    externalRef?: Ref<HTMLDivElement>;
}

const SampleComponent: FC<SampleComponentProps> = ({externalRef}) => {
    const ref1 = useRef<HTMLDivElement>();
    
    const logRef = (node:Node | null) => {
        console.log(node)
    };
    
    return (
        <div ref={forkRef(ref1, logRef, externalRef)}/>
    );
};
```

Class Component

```jsx typescript
import {Component, createRef, Ref, RefObject} from "react"
import forkRef from "react-fork-ref";

interface SampleComponentProps {
    externalRef?: Ref<HTMLDivElement>;
}

class SampleComponent extends Component<SampleComponentProps, {}> {
    ref1: RefObject<HTMLDivElement>;

    constructor(props: SampleComponentProps) {
        super(props);

        this.ref1 = createRef();
    }

    logRef(node: Node | null){
        console.log(node)
    }

    render() {
        const {externalRef} = this.props;
        
        return (
            <div ref={forkRef(this.ref1, this.logRef, externalRef)}/>
        );
    }
}
```
