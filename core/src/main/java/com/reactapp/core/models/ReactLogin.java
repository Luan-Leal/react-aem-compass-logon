package com.reactapp.core.models;

import com.adobe.cq.export.json.ComponentExporter;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.osgi.annotation.versioning.ConsumerType;


/**
 * Defines the {@code ReactLogin} Sling Model used for the {@code reactapp/components/react-login} component.
 * 
 */
@ConsumerType
public interface ReactLogin
    extends ComponentExporter
{


    @JsonProperty("title")
    String getTitle();

    @JsonProperty("text")
    String getText();

    @JsonProperty("login")
    String getLogin();

    @JsonProperty("error")
    String getError();

    @JsonProperty("button")
    String getButton();

}
