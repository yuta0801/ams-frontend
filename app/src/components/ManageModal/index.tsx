import React, { useState } from 'react'
import Switch from '../atoms/Form/Switch'
import useModal from '../../hooks/useModal'
import { DIFFICULTIES, GAMEMODE, LEVEL_TYPE } from '../../constants'
import { Dropdown } from './style'

interface ManageModalProps {
  handleClose(): void
}

const ManageModal = (props: ManageModalProps) => {
  const [currentTab, toggleTab] = useState(0)

  const [state, setState] = useState({
    'allow-flight': false,
    'allow-nether': true,
    'announce-player-achievements': true,
    'difficulty': 1,
    'enable-query': false,
    'enable-rcon': false,
    'enable-command-block': false,
    'force-gamemode': false,
    'gamemode': 0,
    'generate-structures': true,
    'hardcore': false,
    'level-type': 0,
    'online-mode': true,
    'pvp': true,
    'snooper-enabled': true,
    'spawn-animals': true,
    'spawn-monsters': true,
    'spawn-npcs': true,
    'white-list': true,
  })
  
  return useModal(
    <div id="manage_modal" className="modal modal-content">
      <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal" aria-hidden="true" onClick={props.handleClose}>&times;</button>
        <h4 id="manage_title" className="modal-title">サーバー/ログ/コマンド履歴/バックアップの管理</h4>
      </div>
      <div className="modal-body">
        <ul className="nav nav-tabs">
          <li className="active"><a id="properties_tab" href="#properties_content" onClick={() => toggleTab(0)}>サーバー設定(server.properties)</a></li>
          <li><a id="log_tab" href="#log_content" onClick={() => toggleTab(1)}>ログファイル</a></li>
          <li><a id="command_tab" href="#command_content" onClick={() => toggleTab(2)}>コマンド履歴</a></li>
          <li><a id="backup_tab" href="#backup_content" onClick={() => toggleTab(3)}>バックアップ復元・削除</a></li>
        </ul>
        <div className="tab-content">
          <div className="tab-pane in active" id="properties_content">
            { currentTab === 0 && (
              <table className="table table-hover table-condensed manage_table">
                <thead><tr><th data-sortable="false">項目</th><th data-sortable="false">初期値</th><th data-sortable="false">設定</th></tr></thead>
                <tbody>
                  <tr><th>飛行許可[allow-flight]</th><th>無効</th><th><Switch value={state['allow-flight']} onChange={value => setState({ ...state, 'allow-flight': value })} /></th></tr>
                  <tr><th>ネザーの有無[allow-nether]</th><th>有効</th><th><Switch value={state['allow-nether']} onChange={value => setState({ ...state, 'allow-nether': value })} /></th></tr>
                  <tr><th>実績が解除させられた時のアナウンス[announce-player-achievements]</th><th>有効</th><th><Switch value={state['announce-player-achievements']} onChange={value => setState({ ...state, 'announce-player-achievements': value })} /></th></tr>
                  <tr><th>難易度[difficulty]</th><th>イージー</th><th><Dropdown options={DIFFICULTIES} value={state['difficulty']} onChange={value => setState({ ...state, 'difficulty': value })} /></th></tr>
                  <tr><th>GameSpy4 protocol serverの許可[enable-query]</th><th>無効</th><th><Switch value={state['enable-query']} onChange={value => setState({ ...state, 'enable-query': value })} /></th></tr>
                  <tr><th>コンソールへのリモート接続の許可[enable-rcon]</th><th>無効</th><th><Switch value={state['enable-rcon']} onChange={value => setState({ ...state, 'enable-rcon': value })} /></th></tr>
                  <tr><th>コマンドブロックの許可[enable-command-block]</th><th>無効</th><th><Switch value={state['enable-command-block']} onChange={value => setState({ ...state, 'enable-command-block': value })} /></th></tr>
                  <tr><th>ゲームモードをログアウトしても維持するか[force-gamemode]</th><th>無効</th><th><Switch value={state['force-gamemode']} onChange={value => setState({ ...state, 'force-gamemode': value })} /></th></tr>
                  <tr><th>ゲームモード[gamemode]</th><th>サバイバル</th><th><Dropdown options={GAMEMODE} value={state['gamemode']} onChange={value => setState({ ...state, 'gamemode': value })} /></th></tr>
                  <tr><th>建物の生成[generate-structures]</th><th>有効</th><th><Switch value={state['generate-structures']} onChange={value => setState({ ...state, 'generate-structures': value })} /></th></tr>
                  <tr><th>スーパーフラットの設定[generator-settings]</th><th></th><th><input id="generator-settings" type="text" className="form-control input-sm properties_text" /></th></tr>
                  <tr><th>ハードコアの有無[hardcore]</th><th>無効</th><th><Switch value={state['hardcore']} onChange={value => setState({ ...state, 'hardcore': value })} /></th></tr>
                  <tr><th>ワールドフォルダーの名前[level-name]</th><th>world</th><th><input id="level-name" type="text" className="form-control input-sm properties_text" defaultValue="world" /></th></tr>
                  <tr><th>ワールド作成時のシード値[level-seed]</th><th></th><th><input id="level-seed" type="text" className="form-control input-sm properties_text" /></th></tr>
                  <tr><th>ワールド作成時の地形[level-type]</th><th>通常</th><th><Dropdown options={LEVEL_TYPE} value={state['level-type']} onChange={value => setState({ ...state, 'level-type': value })} /></th></tr>
                  <tr><th>ワールドの高さの限界[max-build-height]</th><th>256</th><th><input id="max-build-height" type="number" min="0" className="form-control input-sm properties_text" defaultValue="256" /></th></tr>
                  <tr><th>最大同時接続数[max-players]</th><th>20</th><th><input id="max-players" type="number" min="0" className="form-control input-sm properties_text" defaultValue="20" /></th></tr>
                  <tr><th>ウォッチドッグを待つ最大時間(ミリ秒)[max-tick-time]</th><th></th><th><input id="max-tick-time" type="number" min="0" className="form-control input-sm properties_text" /></th></tr>
                  <tr><th>最大ワールドサイズ[max-world-size]</th><th></th><th><input id="max-world-size" type="number" min="0" className="form-control input-sm properties_text" /></th></tr>
                  <tr><th>サーバーの説明[motd]</th><th>A Minecraft Server</th><th><input id="motd" type="text" className="form-control input-sm properties_text" defaultValue="A Minecraft Server" /></th></tr>
                  <tr><th>通信時の圧縮しきい値[network-compression-threshold]</th><th></th><th><input id="network-compression-threshold" type="text" className="form-control input-sm properties_text" /></th></tr>
                  <tr><th>ログイン時の認証設定[online-mode]</th><th>有効</th><th><Switch value={state['online-mode']} onChange={value => setState({ ...state, 'online-mode': value })} /></th></tr>
                  <tr><th>OP権限の権限内容[op-permission-level]</th><th></th><th><input id="op-permission-level" type="text" className="form-control input-sm properties_text" /></th></tr>
                  <tr><th>自動kickするタイムアウト時間[player-idle-timeout]</th><th></th><th><input id="player-idle-timeout" type="number" min="0" className="form-control input-sm properties_text" /></th></tr>
                  <tr><th>プレイヤー間の攻撃の有無[pvp]</th><th>有効</th><th><Switch value={state['pvp']} onChange={value => setState({ ...state, 'pvp': value })} /></th></tr>
                  <tr><th>GameSpy4 protocol serverのポート[quert.port]</th><th>25565</th><th><input id="quert_port" type="number" min="0" className="form-control input-sm properties_text" defaultValue="25565" /></th></tr>
                  <tr><th>リモート接続のパスワード[rcon.password]</th><th></th><th><input id="rcon_password" type="text" className="form-control input-sm properties_text" /></th></tr>
                  <tr><th>リモート接続のポート[rcon.port]</th><th>25575</th><th><input id="rcon_port" type="number" min="0" className="form-control input-sm properties_text" defaultValue="25575" /></th></tr>
                  <tr><th>リソースパックの指定[resource-pack]</th><th></th><th><input id="resource-pack" type="text" className="form-control input-sm properties_text" /></th></tr>
                  <tr><th>SHA-1ダイジェストの16進数[resource-pack-hash]</th><th></th><th><input id="resource-pack-hash" type="text" className="form-control input-sm properties_text" /></th></tr>
                  <tr><th>バインドするIP[server-ip]</th><th></th><th><input id="server-ip" type="text" className="form-control input-sm properties_text" /></th></tr>
                  <tr><th>サーバーの名前[server-name]</th><th>Unknown Server</th><th><input id="server-name" type="text" className="form-control input-sm properties_text" defaultValue="Unknown Server" /></th></tr>
                  <tr><th>サーバーのポート[server-port]</th><th>25565</th><th><input id="server-port" type="number" min="0" className="form-control input-sm properties_text" defaultValue="25565" /></th></tr>
                  <tr><th>snoopingデータを送信するかどうか[snooper-enabled]</th><th>有効</th><th><Switch value={state['snooper-enabled']} onChange={value => setState({ ...state, 'snooper-enabled': value })} /></th></tr>
                  <tr><th>動物のスポーンの有無[spawn-animals]</th><th>有効</th><th><Switch value={state['spawn-animals']} onChange={value => setState({ ...state, 'spawn-animals': value })} /></th></tr>
                  <tr><th>モンスターのスポーンの有無[spawn-monsters]</th><th>有効</th><th><Switch value={state['spawn-monsters']} onChange={value => setState({ ...state, 'spawn-monsters': value })} /></th></tr>
                  <tr><th>村人のスポーンの有無[spawn-npcs]</th><th>有効</th><th><Switch value={state['spawn-npcs']} onChange={value => setState({ ...state, 'spawn-npcs': value })} /></th></tr>
                  <tr><th>スポーン地点から編集できなくなるブロックの範囲[spawn-protection]</th><th></th><th><input id="rcon.port" type="text" className="form-control input-sm properties_text" /></th></tr>
                  <tr><th>サーバーで設定するチャンクの制限範囲[view-distance]</th><th>10</th><th><input id="view-distance" type="number" min="0" className="form-control input-sm properties_text" defaultValue="10" /></th></tr>
                  <tr><th>ホワイトリストの有効の有無[white-list]</th><th>無効</th><th><Switch value={state['white-list']} onChange={value => setState({ ...state, 'white-list': value })} /></th></tr>
                </tbody>
              </table>
            )}
          </div>
          <div className="tab-pane in" id="log_content">

          </div>
          <div className="tab-pane in" id="command_content">

          </div>
          <div className="tab-pane in" id="backup_content">

          </div>
        </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-default" data-dismiss="modal" onClick={props.handleClose}>閉じる</button>
      </div>
    </div>
  )
}

export default ManageModal