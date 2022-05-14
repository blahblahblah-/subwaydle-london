import { useState } from 'react';
import { Modal, Header, Grid, Checkbox, Icon, Popup } from 'semantic-ui-react';
import { useTranslation, Trans } from 'react-i18next';

import { saveSettings, loadSettings, defaultSettings } from '../utils/settings';

const SettingsModal = (props, state) => {
  const { open, handleClose } = props;
  const [settings, setSettings] = useState(loadSettings());

  const showAnswerStatusBadgesToggleChanged = (event, value) => {
    const settings = { ...defaultSettings };

    settings.display.showAnswerStatusBadges = value.checked;

    saveSettings(settings);
    setSettings(settings);
  }

  const { t } = useTranslation();

  return (
    <Modal closeIcon open={open} onClose={handleClose} size='tiny'>
      <Modal.Header>{ t('settings.title') }</Modal.Header>
      <Modal.Content scrolling>
        <Header>{ t('settings.display.title') }</Header>
        <Grid centered columns={3}>
          <Grid.Row>
            <Grid.Column className='fourteen wide'>
              { t('settings.display.show_badges') }&nbsp;
              <Popup content={t('settings.display.show_badges_hint')}
                trigger={
                  <Icon name='question circle outline' size='large' link
                    onHover={showAnswerStatusBadgesHoverDetail} />
                }
              />
            </Grid.Column>
            <Grid.Column className='two wide'>
              <Checkbox toggle className='float-right'
                name='showAnswerStatusBadgesToggle'
                onChange={showAnswerStatusBadgesToggleChanged}
                checked={settings.display.showAnswerStatusBadges} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Modal.Content>
    </Modal>
  );
}

const showAnswerStatusBadgesHoverDetail = () => {

}

export default SettingsModal;
