/* eslint-disable react/no-typos */
import React, { useState } from "react";
import PropTypes from "prop-types";
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonButton,
    IonIcon,
    IonActionSheet,
    IonAlert
} from "@ionic/react";
import { useTranslation } from "react-i18next";
import { chevronBack, ellipsisHorizontal, trash, close, albums } from "ionicons/icons";
import styles from "./NoteEditPage.module.css";

export default function NoteEditPage(props) {
    const {
        onArchive,
        onDelete,
        onSave,
        text
    } = props;


    const [value, setValue] = useState(text);
    const [showActions, setShowActions] = useState(false);
    const [deleteAlert, setDeleteAlert] = useState(false);
    const { t } = useTranslation();

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="secondary">
                        <IonButton color="secondary" onClick={() => onSave(value)}>
                            <IonIcon slot="icon-only" icon={chevronBack} />
                        </IonButton>
                    </IonButtons>
                    <IonTitle>{t("noteEditPageTitle")}</IonTitle>
                    <IonButtons slot="primary">
                        <IonButton color="secondary" onClick={() => setShowActions(true)}>
                            <IonIcon slot="icon-only" icon={ellipsisHorizontal} />
                        </IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <textarea className={styles.textArea} value={value} onChange={(event) => setValue(event.target.value)} />
                <IonActionSheet
                    isOpen={showActions}
                    onDidDismiss={() => setShowActions(false)}
                    buttons={[
                        {
                            text: t("actionButtonArchive"),
                            icon: albums,
                            handler: onArchive
                        },
                        {
                            text: t("actionButtonDelete"),
                            role: "destructive",
                            icon: trash,
                            handler: () => setDeleteAlert(true)
                        },
                        {
                            text: t("actionButtonCancel"),
                            role: "cancel",
                            icon: close,
                            handler: () => setShowActions(false)
                        }
                    ]}
                />
                <IonAlert
                    isOpen={deleteAlert}
                    onDidDismiss={() => setDeleteAlert(false)}
                    subHeader={t("alertSubHeader")}
                    message={t("alertMessage")}
                    buttons={[
                        {
                            text: t("alertOkay"),
                            handler: onDelete
                        },
                        {
                            text: t("alertCancel"),
                            role: 'cancel',
                            cssClass: 'secondary',
                            handler: cancel => {
                                console.log('Confirm Cancel');
                            }
                        }
                    ]}
                />
            </IonContent>
        </IonPage>
    );
}

NoteEditPage.propTypes = {
    onArchive: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired
};