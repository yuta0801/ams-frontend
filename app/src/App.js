import React from 'react'
import './App.css'

export default function App() {
  return (
    <div className="App">
      {/* <div style={{ webkitAppRegion: 'drag', height: '20px', width: '100%' }}></div> */}
      <div id="main" style={{ height: 'calc(100%-20px)', padding: '3px 0' }}>
        <div id="main_left" className="col-xs-4 s-pad" style={{ height: '100%', overflowY: 'auto', padding: '0px 5px 5px' }}>
          {/* <h2>ステータス</h2>
                <table className="table table-hover">
                    <thead><tr><th data-column-id="profile" data-identifier="true">プロファイル名</th><th data-column-id="time">継続時間</th></tr></thead>
                    <tbody id="status">
                    </tbody>
                </table> */}
          <h2>最新情報</h2>
          <div className="info" style={{ whiteSpace: 'nowrap', overflow: 'auto', height: '40%' }}>読み込み中...</div>
          <h2 className="update"></h2>
          <h2>新規作成</h2>
          <button className="btn btn-primary btn-block" data-toggle="modal" data-target="#profile_modal">サーバーを新たに作成する</button>
          <div className="drag_area">
            <p className="text-center">使用するフォルダ/Zipファイルをドロップ</p>
            <p className="text-center">または</p>
            <div className="center-block">
              <input type="file" multiple="multiple" style={{ display: 'none' }} />
              <button className="drag_click_file btn btn-primary btn-block">ファイルを選択</button>
              <button className="drag_click_folder btn btn-primary btn-block">フォルダを選択</button>
            </div>
          </div>
          <button className="btn btn-default btn-block" data-toggle="modal" data-target="#port_modal">ポート開放(マニュアル)</button>
          <button className="btn btn-default btn-block" data-toggle="modal" data-target="#settings_modal">設定</button>
          <button className="btn btn-warning btn-block" data-toggle="modal" data-target="#report_modal">不具合/要望</button>
          <button className="btn btn-info btn-block" onClick={() => {/* window.open('http://xperd.net/auto-minecraft-server/') */}}>公式サイトへ</button>
          <button className="reload btn btn-danger btn-block">リフレッシュ</button>
        </div>
        <div id="main_right" className="col-xs-8 s-pad" style={{ height: '100%' }}>
          <ul id="detail_tab" className="nav nav-tabs" onClick={() => {/* setTimeout(resize, 1) */}} style={{ whiteSpace: 'nowrap' }}>
          </ul>
          <div id="detail_content" className="tab-content">
            <div style={{ position: 'absolute', zIndex: '-10', top: '30px', width: '96%', margin: '1%' }}>
              <h1>！サーバーがありません！</h1>
              <p>サーバーを立てるには...</p>
              <p>1. 「サーバーを新たに作成する」をクリック</p>
              <p>2. 名前、minecraftのバージョンを選択</p>
              <p>3. 保存を押すと必要なファイルがダウンロードされ、「起動」をクリックでサーバーを立てられます</p><br />
              <p>既存のデータや配布ワールドから読み込むには...</p>
              <p>1. 「使用するデータを選択」をクリックしてデータを選択するか、データをドラッグ&amp;ドロップ</p>
              <p>2. 使用するjarファイルがあるときは選択。ないときはminecraftのバージョンを選択</p>
              <p>3. 保存を押して、「起動」をクリックすればサーバーが立ち上がります</p>  </div>
          </div>
        </div>
      </div>
      <div id="menu_button" onClick={() => {/* menu() */}}><a id="menu_title">MENU</a><div id="menu_icon"></div></div>
      <div id="menu" data-show="false" style={{ height: '100%' }}>
        <div className="col-xs-6 s-pad" style={{ height: '100%' }}>
          <h2>最新情報</h2>
          <div className="info" style={{ whiteSpace: 'nowrap', overflow: 'auto', height: '60%', minHeight: '240px' }}>読み込み中...</div>
          <h2 className="update"></h2>
        </div>
        <div className="col-xs-6 s-pad" style={{ height: '100%', overflow: 'auto' }}>
          <h2>新規作成</h2>
          <button className="btn btn-primary btn-block" data-toggle="modal" data-target="#profile_modal">サーバーを新たに作成する</button>
          <div className="drag_area">
            <p className="text-center">使用するフォルダ/Zipファイルをドロップ</p>
            <p className="text-center">または</p>
            <div className="center-block">
              <input type="file" multiple="multiple" style={{ display: 'none' }} />
              <button className="drag_click_file btn btn-primary btn-block">ファイルを選択</button>
              <button className="drag_click_folder btn btn-primary btn-block">フォルダを選択</button>
            </div>
          </div>
          <button className="btn btn-default btn-block" data-toggle="modal" data-target="#port_modal">ポート開放(マニュアル)</button>
          <button className="btn btn-default btn-block" data-toggle="modal" data-target="#settings_modal">設定</button>
          <button className="btn btn-warning btn-block" data-toggle="modal" data-target="#report_modal">不具合/要望</button>
          <button className="btn btn-info btn-block" onClick={() => {/* window.open('http://xperd.net/auto-minecraft-server/') */}}>公式サイトへ</button>
          <button className="reload btn btn-danger btn-block">リフレッシュ</button>
        </div>
      </div>
      <div id="profile_modal" className="modal modal-content" style={{ height: '400px', width: '500px', top: '10%', left: '10%', minHeight: '350px', minWidth: '500px' }}>
        <div className="modal-header">
          <button id="profile_modal_close" type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
          <h4 id="profile_edit_title" className="modal-title">プロファイルの編集</h4>
        </div>
        <div id="profile_modal_body" className="modal-body"><dl className="dl-horizontal">
          <p id="zip_explain" style={{ display: 'none' }}>★保存を押すとZipの解凍が始まります</p>
          <dt>名前 : </dt><dd><input id="id" type="text" style={{ display: 'none' }} /><input id="name" type="text" className="form-control input-sm" /></dd>
          <dt>データフォルダ : </dt><dd><input id="folder_input" type="text" className="form-control input-sm left-input" /><button id="folder_select" type="button" className="btn btn-default right-button">参照</button></dd>
          <dt>jarファイル : </dt><dd><div id="jar_input_div"><input id="jar_input" type="text" className="form-control input-sm left-input" /><button id="jar_select" type="button" className="btn btn-default right-button">参照</button></div>
            <div id="jar_choice_div" style={{ display: 'none' }}><div className="dropdown"><a className="btn btn-default dropdown-toggle" id="jar_choice" data-toggle="dropdown">必ず選択してください<span className="caret"></span></a>
              <ul id="jar_list" className="dropdown-menu" role="menu" aria-labelledby="jar_choice" style={{ overflowX: 'hidden' }}></ul></div></div></dd>
          <dt>最大メモリ : </dt><dd><input id="max_memory_slider" type="range" min="4" max="32" defaultValue="8" className="custom left-input" />
            <input id="max_memory_text" type="text" className="form-control input-sm right-button" defaultValue="1024MB" /></dd>
          <dt>最小メモリ : </dt><dd><input id="min_memory_slider" type="range" min="4" max="32" defaultValue="4" className="custom left-input" />
            <input id="min_memory_text" type="text" className="form-control input-sm right-button" defaultValue="512MB" /></dd>
          <dt>オプション : </dt><dd><label><input id="upnp_check" type="checkbox" />UPnPによるポート開放</label><br />
            <div className="row"><div className="col-xs-5"><label><input id="backup_check" type="checkbox" />自動バックアップ</label></div><div className="col-xs-2" style={{ padding: '0 1px' }}><input id="backup_minute" type="number" min="1" className="form-control input-sm" defaultValue="10" /></div><div className="col-xs-1" style={{ padding: '0 1px' }}> 分毎</div><div className="col-xs-2" style={{ padding: '0 1px' }}><input id="backup_count" type="number" min="1" className="form-control input-sm" defaultValue="5" /></div><div className="col-xs-2" style={{ padding: '0 1px' }}> 個まで</div></div></dd>
          <dt>バージョン : </dt>
          <dd style={{ display: 'none' }}><label><input id="change_check" type="checkbox" onChange={() => {/* if ($(this).prop('checked')) $('#version').parent().parent().show(); else  $('#version').parent().parent().hide() */}} /> Minecraftバージョンを変更</label></dd>
          <dd style={{ display: 'none' }}><div className="dropdown" style={{ display: 'inline-block' }}><a className="btn btn-default dropdown-toggle" id="version" data-toggle="dropdown">選択<span className="caret"></span></a>
            <ul id="version_body" className="dropdown-menu" role="menu" aria-labelledby="version" style={{ height: '200px', overflowX: 'hidden' }}>
              <li role="presentation" className="dropdown-header">バニラサーバー</li>
              <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */}}>Vanila 1.12.2</a></li>
              <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */}}>Vanila 1.12.1</a></li>
              <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */}}>Vanila 1.12</a></li>
              <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */}}>Vanila 1.11.2</a></li>
              <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */}}>Vanila 1.11.1</a></li>
              <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */}}>Vanila 1.11</a></li>
              <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */}}>Vanila 1.10.2</a></li>
              <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */}}>Vanila 1.10.1</a></li>
              <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */}}>Vanila 1.10</a></li>
              <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */}}>Vanila 1.9.4</a></li>
              <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */}}>Vanila 1.9.3</a></li>
              <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */}}>Vanila 1.9.2</a></li>
              <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */}}>Vanila 1.9.1</a></li>
              <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */}}>Vanila 1.9</a></li>
              <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */}}>Vanila 1.8.9</a></li>
              <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */}}>Vanila 1.8.8</a></li>
              <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */}}>Vanila 1.8.7</a></li>
              <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */}}>Vanila 1.8.6</a></li>
              <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */}}>Vanila 1.8.5</a></li>
              <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */}}>Vanila 1.8.4</a></li>
              <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */}}>Vanila 1.8.3</a></li>
              <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */}}>Vanila 1.8.2</a></li>
              <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */}}>Vanila 1.8.1</a></li>
              <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */}}>Vanila 1.8</a></li>
              <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */}}>Vanila 1.7.10</a></li>
              <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */}}>Vanila 1.7.9</a></li>
              <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */}}>Vanila 1.7.5</a></li>
              <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */}}>Vanila 1.7.4</a></li>
              <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */}}>Vanila 1.7.2</a></li>
              <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */}}>Vanila 1.6.4</a></li>
              <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */}}>Vanila 1.6.2</a></li>
              <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */}}>Vanila 1.6.1</a></li>
              <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */}}>Vanila 1.5.2</a></li>
              <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */}}>Vanila 1.5.1</a></li>
              <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */}}>Vanila 1.4.7</a></li>
              <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */}}>Vanila 1.4.6</a></li>
              <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */}}>Vanila 1.4.5</a></li>
              <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */}}>Vanila 1.4.4</a></li>
              <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */}}>Vanila 1.4.2</a></li>
              <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */}}>Vanila 1.3.2</a></li>
              <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */}}>Vanila 1.3.1</a></li>
              <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */}}>Vanila 1.2.5</a></li>
              <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */}}>Vanila 1.2.4</a></li>
              <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */}}>Vanila 1.2.3</a></li>
              <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */}}>Vanila 1.2.2</a></li>
              <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */}}>Vanila 1.2.1</a></li>
              <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */}}>Vanila 1.1</a></li>
              <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */}}>Vanila 1.0</a></li>
              <li role="presentation" className="dropdown-header">Forgeサーバー</li>
              <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */}}>Forge 1.12.2</a></li>
              <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */}}>Forge 1.12.1</a></li>
              <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */}}>Forge 1.12</a></li>
              <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */}}>Forge 1.11.2</a></li>
              <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */}}>Forge 1.11</a></li>
              <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */}}>Forge 1.10.2</a></li>
              <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */}}>Forge 1.10</a></li>
              <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */}}>Forge 1.9.4</a></li>
              <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */}}>Forge 1.9</a></li>
              <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */}}>Forge 1.8.9</a></li>
              <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */}}>Forge 1.8.8</a></li>
              <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */}}>Forge 1.8</a></li>
              <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */}}>Forge 1.7.10</a></li>
              <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */}}>Forge 1.7.2</a></li>
              <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */}}>Forge 1.6.4</a></li>
              <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */}}>Forge 1.6.3</a></li>
              <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */}}>Forge 1.6.2</a></li>
              <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */}}>Forge 1.6.1</a></li>
              <li role="presentation"><a role="menuitem" href="#" onClick={() => {/* ver(this) */}}>Forge 1.5.2</a></li>
              {/* <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">Forge 1.5.1</a></li>
                <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">Forge 1.5</a></li>
                <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">Forge 1.4.7</a></li>
                <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">Forge 1.4.6</a></li>
                <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">Forge 1.4.5</a></li>
                <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">Forge 1.4.4</a></li>
                <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">Forge 1.4.3</a></li>
                <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">Forge 1.4.2</a></li>
                <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">Forge 1.4.1</a></li>
                <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">Forge 1.4.0</a></li>
                <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">Forge 1.3.2</a></li>
                <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">Forge 1.2.5</a></li>
                <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">Forge 1.2.4</a></li>
                <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">Forge 1.2.3</a></li>
                <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">Forge 1.1</a></li> */}
            </ul>
          </div>
            <label><input id="latest_check" type="checkbox" />latest(最新版、Forgeのみ)</label>
          </dd></dl>
          <div className="progress progress-striped active" style={{ display: 'none', marginBottom: '4px' }}><div id="progress" className="progress-bar progress-bar-info" id="loading" style={{ width: '0%' }}></div></div>
          <p id="progress_text" className="text-right" style={{ display: 'none' }}>処理中...(0%)</p>
        </div>
        <div id="profile_modal_footer" className="modal-footer">
          <button id="profile_save" type="button" className="btn btn-primary">保存</button>
          <button type="button" className="btn btn-default" data-dismiss="modal">キャンセル</button>
        </div>
      </div>
      <div id="eula_modal" className="modal">
        <div className="modal-dialog" style={{ width: '80%' }}>
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
              <h4 className="modal-title">EULA(使用許諾契約)に同意しますか？</h4>
            </div>
            <div className="modal-body">
              MinecraftのEULAに同意しないとサーバーは立てられません。以下の内容。
                    <div id="eula_div"></div>
              {/* <iframe id="eula_iframe" style={{ width: '100%', height: '400px' }}></iframe> */}
            </div>
            <div className="modal-footer">
              <button id="eula_agree" type="button" className="btn btn-primary">同意する</button>
              <button type="button" className="btn btn-default" data-dismiss="modal">キャンセル</button>
            </div>
          </div>
        </div>
      </div>
      <div id="manage_modal" className="modal modal-content" style={{ height: '90%', width: '90%', top: '5%', left: '5%', minWidth: '750px', minHeight: '200px' }}>
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
          <h4 id="manage_title" className="modal-title">サーバー/ログ/コマンド履歴/バックアップの管理</h4>
        </div>
        <div className="modal-body">
          <ul className="nav nav-tabs">
            <li className="active"><a id="properties_tab" href="#properties_content" data-toggle="tab">サーバー設定(server.properties)</a></li>
            <li><a id="log_tab" href="#log_content" data-toggle="tab">ログファイル</a></li>
            <li><a id="command_tab" href="#command_content" data-toggle="tab">コマンド履歴</a></li>
            <li><a id="backup_tab" href="#backup_content" data-toggle="tab">バックアップ復元・削除</a></li>
          </ul>
          <div className="tab-content" style={{ height: '100%', paddingBottom: '23px' }}>
            <div className="tab-pane in active" id="properties_content" style={{ height: '100%', overflow: 'scroll' }}>
              <table className="table table-hover table-condensed manage_table">
                <thead><tr><th data-sortable="false">項目</th><th data-sortable="false">初期値</th><th data-sortable="false">設定</th></tr></thead>
                <tbody>
                  <tr><th>飛行許可[allow-flight]</th><th>無効</th><th><input id="allow-flight" className="properties_toggle" type="checkbox" name="toggle" /></th></tr>
                  <tr><th>ネザーの有無[allow-nether]</th><th>有効</th><th><input id="allow-nether" className="properties_toggle" type="checkbox" name="toggle" defaultChecked /></th></tr>
                  <tr><th>実績が解除させられた時のアナウンス[announce-player-achievements]</th><th>有効</th><th><input id="announce-player-achievements" className="properties_toggle" type="checkbox" name="toggle" defaultChecked /></th></tr>
                  <tr><th>難易度[difficulty]</th><th>イージー</th><th>
                    <div className="dropdown"><a className="btn btn-default dropdown-toggle" id="difficulty" data-toggle="dropdown">イージー<span className="caret"></span></a>
                      <ul className="dropdown-menu properties_drop" role="menu" aria-labelledby="difficulty">
                        <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">ピースフル</a></li>
                        <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">イージー</a></li>
                        <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">ノーマル</a></li>
                        <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">ハード</a></li>
                      </ul></div></th></tr>
                  <tr><th>GameSpy4 protocol serverの許可[enable-query]</th><th>無効</th><th><input id="enable-query" className="properties_toggle" type="checkbox" name="toggle" /></th></tr>
                  <tr><th>コンソールへのリモート接続の許可[enable-rcon]</th><th>無効</th><th><input id="enable-rcon" className="properties_toggle" type="checkbox" name="toggle" /></th></tr>
                  <tr><th>コマンドブロックの許可[enable-command-block]</th><th>無効</th><th><input id="enable-command-block" className="properties_toggle" type="checkbox" name="toggle" /></th></tr>
                  <tr><th>ゲームモードをログアウトしても維持するか[force-gamemode]</th><th>無効</th><th><input id="force-gamemode" className="properties_toggle" type="checkbox" name="toggle" /></th></tr>
                  <tr><th>ゲームモード[gamemode]</th><th>サバイバル</th><th>
                    <div className="dropdown"><a className="btn btn-default dropdown-toggle" id="gamemode" data-toggle="dropdown">サバイバル<span className="caret"></span></a>
                      <ul className="dropdown-menu properties_drop" role="menu" aria-labelledby="gamemode">
                        <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">サバイバル</a></li>
                        <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">クリエイティブ</a></li>
                        <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">アドベンチャー</a></li>
                        <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">スペクテイター</a></li>
                      </ul></div></th></tr>
                  <tr><th>建物の生成[generate-structures]</th><th>有効</th><th><input id="generate-structures" className="properties_toggle" type="checkbox" name="toggle" defaultChecked /></th></tr>
                  <tr><th>スーパーフラットの設定[generator-settings]</th><th></th><th><input id="generator-settings" type="text" className="form-control input-sm properties_text" /></th></tr>
                  <tr><th>ハードコアの有無[hardcore]</th><th>無効</th><th><input id="hardcore" className="properties_toggle" type="checkbox" name="toggle" /></th></tr>
                  <tr><th>ワールドフォルダーの名前[level-name]</th><th>world</th><th><input id="level-name" type="text" className="form-control input-sm properties_text" defaultValue="world" /></th></tr>
                  <tr><th>ワールド作成時のシード値[level-seed]</th><th></th><th><input id="level-seed" type="text" className="form-control input-sm properties_text" /></th></tr>
                  <tr><th>ワールド作成時の地形[level-type]</th><th>通常</th><th>
                    <div className="dropdown"><a className="btn btn-default dropdown-toggle" id="level-type" data-toggle="dropdown">通常<span className="caret"></span></a>
                      <ul className="dropdown-menu properties_drop" role="menu" aria-labelledby="level-type">
                        <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">通常</a></li>
                        <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">フラット</a></li>
                        <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">大きなバイオーム</a></li>
                        <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">アンプリファイド</a></li>
                        <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">カスタマイズ</a></li>
                      </ul></div></th></tr>
                  <tr><th>ワールドの高さの限界[max-build-height]</th><th>256</th><th><input id="max-build-height" type="number" min="0" className="form-control input-sm properties_text" defaultValue="256" /></th></tr>
                  <tr><th>最大同時接続数[max-players]</th><th>20</th><th><input id="max-players" type="number" min="0" className="form-control input-sm properties_text" defaultValue="20" /></th></tr>
                  <tr><th>ウォッチドッグを待つ最大時間(ミリ秒)[max-tick-time]</th><th></th><th><input id="max-tick-time" type="number" min="0" className="form-control input-sm properties_text" /></th></tr>
                  <tr><th>最大ワールドサイズ[max-world-size]</th><th></th><th><input id="max-world-size" type="number" min="0" className="form-control input-sm properties_text" /></th></tr>
                  <tr><th>サーバーの説明[motd]</th><th>A Minecraft Server</th><th><input id="motd" type="text" className="form-control input-sm properties_text" defaultValue="A Minecraft Server" /></th></tr>
                  <tr><th>通信時の圧縮しきい値[network-compression-threshold]</th><th></th><th><input id="network-compression-threshold" type="text" className="form-control input-sm properties_text" /></th></tr>
                  <tr><th>ログイン時の認証設定[online-mode]</th><th>有効</th><th><input id="online-mode" className="properties_toggle" type="checkbox" name="toggle" defaultChecked /></th></tr>
                  <tr><th>OP権限の権限内容[op-permission-level]</th><th></th><th><input id="op-permission-level" type="text" className="form-control input-sm properties_text" /></th></tr>
                  <tr><th>自動kickするタイムアウト時間[player-idle-timeout]</th><th></th><th><input id="player-idle-timeout" type="number" min="0" className="form-control input-sm properties_text" /></th></tr>
                  <tr><th>プレイヤー間の攻撃の有無[pvp]</th><th>有効</th><th><input id="pvp" className="properties_toggle" type="checkbox" name="toggle" defaultChecked /></th></tr>
                  <tr><th>GameSpy4 protocol serverのポート[quert.port]</th><th>25565</th><th><input id="quert_port" type="number" min="0" className="form-control input-sm properties_text" defaultValue="25565" /></th></tr>
                  <tr><th>リモート接続のパスワード[rcon.password]</th><th></th><th><input id="rcon_password" type="text" className="form-control input-sm properties_text" /></th></tr>
                  <tr><th>リモート接続のポート[rcon.port]</th><th>25575</th><th><input id="rcon_port" type="number" min="0" className="form-control input-sm properties_text" defaultValue="25575" /></th></tr>
                  <tr><th>リソースパックの指定[resource-pack]</th><th></th><th><input id="resource-pack" type="text" className="form-control input-sm properties_text" /></th></tr>
                  <tr><th>SHA-1ダイジェストの16進数[resource-pack-hash]</th><th></th><th><input id="resource-pack-hash" type="text" className="form-control input-sm properties_text" /></th></tr>
                  <tr><th>バインドするIP[server-ip]</th><th></th><th><input id="server-ip" type="text" className="form-control input-sm properties_text" /></th></tr>
                  <tr><th>サーバーの名前[server-name]</th><th>Unknown Server</th><th><input id="server-name" type="text" className="form-control input-sm properties_text" defaultValue="Unknown Server" /></th></tr>
                  <tr><th>サーバーのポート[server-port]</th><th>25565</th><th><input id="server-port" type="number" min="0" className="form-control input-sm properties_text" defaultValue="25565" /></th></tr>
                  <tr><th>snoopingデータを送信するかどうか[snooper-enabled]</th><th>有効</th><th><input id="snooper-enabled" className="properties_toggle" type="checkbox" name="toggle" defaultChecked /></th></tr>
                  <tr><th>動物のスポーンの有無[spawn-animals]</th><th>有効</th><th><input id="spawn-animals" className="properties_toggle" type="checkbox" name="toggle" defaultChecked /></th></tr>
                  <tr><th>モンスターのスポーンの有無[spawn-monsters]</th><th>有効</th><th><input id="spawn-monsters" className="properties_toggle" type="checkbox" name="toggle" defaultChecked /></th></tr>
                  <tr><th>村人のスポーンの有無[spawn-npcs]</th><th>有効</th><th><input id="spawn-npcs" className="properties_toggle" type="checkbox" name="toggle" defaultChecked /></th></tr>
                  <tr><th>スポーン地点から編集できなくなるブロックの範囲[spawn-protection]</th><th></th><th><input id="rcon.port" type="text" className="form-control input-sm properties_text" /></th></tr>
                  <tr><th>サーバーで設定するチャンクの制限範囲[view-distance]</th><th>10</th><th><input id="view-distance" type="number" min="0" className="form-control input-sm properties_text" defaultValue="10" /></th></tr>
                  <tr><th>ホワイトリストの有効の有無[white-list]</th><th>無効</th><th><input id="white-list" className="properties_toggle" type="checkbox" name="toggle" defaultChecked /></th></tr>
                </tbody>
              </table>
            </div>
            <div className="tab-pane in" id="log_content" style={{ height: '100%', overflow: 'scroll' }}>

            </div>
            <div className="tab-pane in" id="command_content" style={{ height: '100%', overflow: 'scroll' }}>

            </div>
            <div className="tab-pane in" id="backup_content" style={{ height: '100%', overflow: 'scroll' }}>

            </div>
          </div>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-default" data-dismiss="modal">閉じる</button>
        </div>
      </div>
      <div id="report_modal" className="modal modal-content" style={{ top: '10%', left: '10%', width: '80%', height: '80%', minWidth: '540px', minHeight: '400px' }}>
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
          <h4 className="modal-title">不具合報告/要望</h4>
        </div>
        <div className="modal-body">
          内容:<div className="dropdown"><a className="btn btn-default dropdown-toggle" id="report_type" data-toggle="dropdown">不具合報告<span className="caret"></span></a>
            <ul id="report_type_select" className="dropdown-menu" role="menu" aria-labelledby="report_type">
              <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">不具合報告</a></li>
              <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">不具合報告(ポート開放)</a></li>
              <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">要望</a></li>
            </ul></div>
          <p id="port_text_h" style={{ display: 'none' }}>このレポートには以下のデータが含まれます</p>
          <textarea id="port_text" style={{ width: '100%', height: '30%', display: 'none' }}></textarea>
          <p>できるだけ詳細にお願いします</p>
          <textarea id="report_text" style={{ width: '100%', height: '70%' }}></textarea>
          <p></p>
        </div>
        <div className="modal-footer">
          <button id="report_send" type="button" className="btn btn-primary">送信</button>
          <button type="button" className="btn btn-default" data-dismiss="modal">キャンセル</button>
        </div>
      </div>
      <div id="port_modal" className="modal modal-content" style={{ top: '10%', left: '10%', width: '400px', height: '200px' }}>
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
          <h4 className="modal-title">ポート開放</h4>
        </div>
        <div className="modal-body">
          <p>手動でポート開放ができます(動作保証外です)</p>
          外部疎通チェックはそのポートを使用するソフトが起動していて、なおかつポート開放が成功している必要があります。<br />
          ポート:<input id="manual_port" className="form-control input-sm" type="number" defaultValue="25565" min="0" max="65535" style={{ width: '70px', display: 'inline-block' }} />
          <button className="btn btn-primary" onClick={() => {/* port_open(undefined, parseInt($('#manual_port').val())); alert('ポート開放を試行しました') */}}>解放</button>
          <button className="btn btn-danger" onClick={() => {/* upnp.portUnmapping({ public: parseInt($('#manual_port').val()) }); alert('ポート閉鎖を試行しました') */}}>閉鎖</button>
          <button id="port_check_manual" className="btn btn-warning" onClick={() => {/* port_check(undefined, parseInt($('#manual_port').val())) */}}>外部疎通チェック</button>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-default" data-dismiss="modal">閉じる</button>
        </div>
      </div>
      <div id="settings_modal" className="modal modal-content" style={{ height: '350px', width: '500px', top: '10%', left: '10%', minHeight: '350px', minWidth: '500px' }}>
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
          <h4 className="modal-title">設定</h4>
        </div>
        <div className="modal-body">
          <ul className="nav nav-tabs">
            <li className="active"><a href="#general_settings_content" data-toggle="tab">全般</a></li>
            <li><a href="#log_settings_content" data-toggle="tab">ログ</a></li>
            <li><a href="#backup_settings_content" data-toggle="tab">バックアップ</a></li>
          </ul>
          <div className="tab-content" style={{ height: '100%', padding: '10px' }}>
            <div className="tab-pane in active" id="general_settings_content">
              <label><input className="settings_ general" type="checkbox" />----</label>
            </div>
            <div className="tab-pane in" id="log_settings_content">
              <label><input id="log_att" className="settings log" type="checkbox" />[:@～]のようなメッセージを表示</label>
            </div>
            <div className="tab-pane in" id="backup_settings_content">
              <label><input id="backup_notify" className="settings backup" type="checkbox" />バックアップしたことをログで通知</label>
              <label><input id="backup_dir_bool" className="settings backup" type="checkbox" onChange={() => {/* $('#backup_dir, #backup_select').prop('disabled', !$(this).prop('checked')) */}} />指定フォルダーにまとめてバックアップ</label>
              <input id="backup_dir" type="text" className="form-control input-sm left-input settings backup" disabled={true} /><button id="backup_select" type="button" className="btn btn-default right-button" disabled={true}>参照</button>
            </div>
          </div></div>
        <div className="modal-footer">
          <button id="settings_save" type="button" className="btn btn-primary">保存</button>
          <button type="button" className="btn btn-default" data-dismiss="modal">キャンセル</button>
        </div>
      </div>
      <button id="copy_player" style={{ display: 'none' }}></button>
      <div id="dpi"></div>
      <div id="loading"><div id="loading_bar"></div><div id="loading_text">読み込み中...</div></div>
    </div>
  )
}