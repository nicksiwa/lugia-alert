enum Style {
  Primary = "primary",
  Secondary = "secondary",
  Info = "info",
  Warning = "warning",
  Danger = "danger",
}

type primaryStyle = {
  icon: "";
  confirmButton: "lugia-btn--primary";
};

type secondaryStyle = {
  icon: "";
  confirmButton: "lugia-btn--secondary";
};

type infoStyle = {
  icon: "";
  confirmButton: "lugia-btn--info";
};

type warningStyle = {
  icon: "";
  confirmButton: "lugia-btn--warning";
};

type dangerStyle = {
  icon: "";
  confirmButton: "lugia-btn--danger";
};

type dialogStyle =
  | primaryStyle
  | secondaryStyle
  | infoStyle
  | warningStyle
  | dangerStyle;

export function dialogStyle(style: string | null): dialogStyle {
  switch (style) {
    case Style.Primary:
      return {
        icon: "",
        confirmButton: "lugia-btn--primary",
      };
    case Style.Secondary:
      return {
        icon: "",
        confirmButton: "lugia-btn--secondary",
      };
    case Style.Info:
      return {
        icon: "",
        confirmButton: "lugia-btn--info",
      };
    case Style.Warning:
      return {
        icon: "",
        confirmButton: "lugia-btn--warning",
      };
    case Style.Danger:
      return {
        icon: "",
        confirmButton: "lugia-btn--danger",
      };
    default:
      return {
        icon: "",
        confirmButton: "lugia-btn--primary",
      };
  }
}
