export const formatUrlPathname = (pathname) => {
  const patterns = [
    {
      uuid: {
        from: /\w{8}-\w{4}-\w{4}-\w{4}-\w{12}/,
        to: ":id",
      },
    },
  ];

  return patterns.reduce(
    (urlPathname, pattern) =>
      urlPathname.replace(pattern.uuid.from, pattern.uuid.to),
    pathname
  );
};

export const getIdParamFromUrl = (url) => {
  const [id] = url.match(/\w{8}-\w{4}-\w{4}-\w{4}-\w{12}/);

  return id;
};
