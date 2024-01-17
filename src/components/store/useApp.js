import appStore from "./appStore";

const useApp = () => {
  const post = appStore((state) => state.post);
  const setPost = appStore((state) => state.setPost);

  const filter = appStore((state) => state.filter);
  const setFilter = appStore((state) => state.setFilter);

  return { post, setPost, filter, setFilter };
};

export default useApp;
