import {Ref, MutableRefObject} from "react";

export default function forkRef<T>(...refs: Ref<T>[]) {
    return function (node: T | null) {
        for (const ref of refs) {
            if (typeof ref === "function")
                ref(node);
            else if (ref)
                (ref as MutableRefObject<T | null>).current = node;
        }
    }
}