# サウンドやオーディオが断続的にオンオフされる

Windows はオーディオの録音と再生を区別しません。そのため、実際には Wallpaper Engine がお使いのコンピューターオーディオを録音しているにもかかわらず、Wallpaper Engine に他のプログラムが音を出していると通知します。

Wallpaper Engine の設定で「パフォーマンス」タブをチェックしてください。 *「他のアプリケーションがオーディオ再生中」*のオプションが*「ミュート」*にセットされていて、Wallpaper Engine のサウンドがオンオフを繰り返している場合、バックグラウンドで画面とサウンドを記録する録画プログラムがある可能性が高いです。

これを解決するには、次の3つの方法のうち1つを使うことができます。

* コンピューターの録音プログラムをオフにするか、間違って Wallpaper Engine を録音しないように設定し直す。
    * 多くのユーザーが、**Nvidia Share / Nvidia GameStream / Nvidia ShadowPlay** によってこの問題を経験しています。これは **Nvidia GeForce Experience** でオフにすることができます。 AMDグラフィックスカードユーザーの場合は、**AMD ReLive** が同様にこの問題を引き起こす可能性があります。これもAMDグラフィックスカードドライバーの一部です。 コンピューター内で何が録音しているかよくわからない場合は、まずこのチェックをお試しください。
    * どのアプリケーションがこれを引き起こしているかわからない場合は、Windows のオーディオミキサーをチェックし、現在、どのアプリケーションがオーディオにアクセスしているか見てみると役に立つことがあります。 あるいはできるだけ多くのプログラムを終了させて、Windows タスクマネージャのプロセスリストから .exe ファイルを絞り込んでみてください。
* 意図的にバックグラウンドで録音している場合や、オフにする方法がわからない場合は、Wallpaper Engine の設定の「パフォーマンス」タブで *アプリケーションルール* を設定することができます。 「状態」を「オーディオ再生されている」に、「壁紙再生」を「再生を続ける」に設定します。

![Application Rules can be found in the "Performance" tab of the Wallpaper Engine settings](./applicationrule.png)

Replace some.exe with .exe files you can find in the task manager until you have narrowed it down to the responsible .exe.

* Lastly, you can also change the option 'other application playing audio' to 'keep running'. However, this means Wallpaper Engine will not automatically mute audio output from wallpapers when you listen to music or watch videos that are not full-screen.
