# 「DirectX 10はサポートされていません」というクラッシュ
カードの正確な名前でネットを検索し、お使いのグラフィックスカードが実際に DirectX 10 をサポートしていることを確認してください。 古いカードをお使いの場合、グラフィックスカードがハードウェアレベルで DirectX 10 をサポートしていなければ、DirectX 10 をインストールしても問題は解決しません。

カードがサポートしているのにこのエラーが出る場合は、最新の（あるいは古い、より安定した）ドライバーを再インストールしてみてください。 Wallpaper Engine がグラフィックスカードにアクセスできないようにする侵入的なセキュリティソフトウェアをPCから削除してください。

## Duet Display およびその他のディスプレイ拡張ソフトウェア
Display extension software like Duet Display installs a fake graphics card which is not capable of the same features as a real graphics card. これもまた、Wallpaper Engine がこのエラーを表示する原因となる可能性があります。Wallpaper Engine は DirectX 10 をサポートする本物のグラフィックスカードを必要とするからです。 DuetDisplay などのディスプレイ拡張ソフトウェアは Wallpaper Engine と互換性がなく、オフにする必要があります。

