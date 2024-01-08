type Asset = {
  base: string;
  bundleName: string;
  category: string;
  ext: string;
  name: string;
  sum: string;
  url: string;
}

type Assets = Array<Asset>;

type ReplicantMap = {
    'assets:background-game': Assets,
    'assets:background-setup': Assets,
    'assets:logo': Assets,
    'assets:sponsor-logo': Assets,
}

export {
  Asset,
  Assets,
  ReplicantMap,
};
