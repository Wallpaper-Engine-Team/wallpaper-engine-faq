# ダウンロードした壁紙の編集

基本的に、Wallpaper Engine はダウンロードされた壁紙自体の編集はサポートしていません。 しかし、壁紙のタイプによって（タイプは、右側のプレビュー画像の下に書かれています）、サードパーティーのアプリケーションを使うことにより、たいていの場合、編集は可能です。

作品を再公開するためには、オリジナルの作者の許諾が必要である可能性があることは、常に念頭に置いておいてください。 よくわからない場合は、Steam ワークショップで公開する前に元の作者に問い合わせてください。

[[toc]]

## 壁紙のソースファイルを見つけるには？

「インストール済み」タブで壁紙を右クリックし、「エクスプローラーを開く」を選択します。

## さまざまな種類の壁紙の編集方法

### シーンの壁紙

シーンの壁紙は、.pkg ファイルにパックされています。プロジェクト関連のデータすべてが揃わなくなるので、ボックスの外では編集できません。 .pkg ファイルを開こうとすると、「パックされた壁紙を開くことはできません。」というエラーメッセージが表示されます。 似たものとしては、Photoshop データが添付されていない .jpeg 画像ファイルがあります。添付されていないデータは常に元の作者が持っています。

#### 非公式のコミュニティシーンアンパッカー

しかし、コミュニティのメンバーは非公式のシーン壁紙のアンパックツールを作っています。これによってシーンファイルのパックを開き、自分の壁紙のスタート地点として使うことができます。 詳しくはこちらの Web サイトをご覧ください。

* [https://wetranslate.thiscould.work/scene.pkg/](https://wetranslate.thiscould.work/scene.pkg/)

それでも有効な project.json ファイルは必要です。これは、エディタで新しい空白の壁紙を作り、Wallpaper Engine を閉じ、その後ダウンロードした壁紙をアンパックしてその中身を新しいプロジェクトディレクトリにコピーペーストすることで、簡単に作ることができます。

以前にプロジェクトファイルをなくしてしまった自分の壁紙を編集したい場合は、下の「*失ったプロジェクトの更新*」セクションをご覧ください。既存の壁紙を更新するために project.json をどのように変更すればよいのかが書かれています。

::: 警告 注意 このツールは公式にサポートされておらず、これが正しく動作することを当社が保証するものではありません。 アンパッカーについて問題が起きたり疑問があったりする場合は、オリジナルのクリエイターにご連絡ください。 :::

### Web の壁紙

Web ベースの壁紙は、HTML および JavaScript ベースです。 You can go to the source files as described in the section above and use these files as a basis for your own web-based wallpaper.

### Video wallpapers

Video-based wallpapers are video files. You can find the video file as described in the section above and then use a third-party video editing application of your choice to modify the video.

### Application wallpapers

Generally, application wallpapers cannot be edited. Application wallpapers are usually compiled programs which means you do not have access to the source code. If you really want to change application-based wallpapers, try contacting the author of the wallpaper and see if they are willing to help.

## Updating a lost project

If you deleted your project you can still overwrite it, but depending on the type of wallpaper you published, you may not be able to edit it anymore. Create a new wallpaper as usual and open its project directory with Edit -> Open in Explorer. Open the `project.json` file with a text editor, it will look something like this:

```json
{
    "description" : "Cool description",
    "file" : "scene.json",
    "general" : 
    {
        "properties" : 
        {
            "schemecolor" : 
            {
                "order" : 0,
                "text" : "ui_browse_properties_scheme_color",
                "type" : "color",
                "value" : "0.7647058823529411 0.3764705882352941 0.07450980392156863"
            }
        }
    },
    "preview" : "preview.jpg",
    "tags" : [ "Relaxing" ],
    "title" : "Cool title of your wallpaper",
    "type" : "scene",
    "visibility" : "private"
}
```

Add this line at the top right after `{`:

```json
    "workshopid" : "12345678",
```
So that it looks like:

```json{2}
{
    "workshopid" : "12345678",
    "description" : "Cool description",
    "file" : "scene.json",
    [...]
```

**Replace the number 12345678 with the ID of your submission! You can find this ID in the URL of your existing upload:**

![https://steamcommunity.com/sharedfiles/filedetails/?id=12345678](./workshopid.png)
