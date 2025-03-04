import React from 'react';
import Container from '@layouts/Container.layout';
import {Colors} from '@styles/colors.style.asset';
import {useTheme} from '@react-navigation/native';
import {statusBar} from '@styles/properties.asset';
import Header from '@components/header/Header.component';
import {customPadding} from '@styles/global.style.asset';
import IconButton from '@components/button/icon-button/IconButton.component';
import SearchIcon from '@icons/Search.icon';
const Options = () => {
  const colors = useTheme().colors as Colors;

  return <IconButton icon={<SearchIcon fill={colors.white} />} />;
};
const SelectContact = () => {
  const colors = useTheme().colors as Colors;
  return (
    <Container
      statusBarBg={colors.primary}
      statusBarStyle={statusBar.lightContent}>
      <Header
        text={'Select Contact'}
        iconFill={colors.white}
        textStyle={{color: colors.white}}
        rightComponent={<Options />}
        style={{
          backgroundColor: colors.primary,
          ...customPadding(0, 5, 10, 5),
        }}
      />
    </Container>
  );
};

export default SelectContact;
