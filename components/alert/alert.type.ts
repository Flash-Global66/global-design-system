import { ButtonSize } from '@flash-global66/g-button';

type AlertType = 'success' | 'warning' | 'error' | 'info' | 'important' | 'custom' | undefined;

export interface IAlertButton {
  isPrimary?: boolean;
  isSecondary?: boolean;
}

export interface IAlert {
  type: AlertType;
  title?: string;
  description?: string;
  srcIcon?: string;

  primaryText?: string;
  secondaryText?: string;
  buttonSize?: ButtonSize;
  reverseButtons?: boolean;
}

export interface IAlertAttributesProvider {
  showAlert: boolean;
  type: AlertType;
  title: string;
  srcIcon: string;
  description: string;
  primaryText: string;
  secondaryText: string;
  buttonSize: ButtonSize;
  reverseButtons: boolean;
}

export interface IAlertProvider extends IAlertAttributesProvider{
  openAlert: (params: IAlert, onNext?: (action: IAlertButton) => Promise<void>) => void;
  hideAlert: () => void;
  onNext: (action: IAlertButton) => Promise<void>;
}
