import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";

type Props = {
  fetchNextPage: VoidFunction;
};

export const NextPageFetcher = ({ fetchNextPage }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      fetchNextPage();
    }
  }, [isInView, fetchNextPage]);

  return <div ref={ref} />;
};
