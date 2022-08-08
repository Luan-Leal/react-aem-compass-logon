package com.reactapp.core.models;

import com.adobe.cq.export.json.ComponentExporter;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.osgi.annotation.versioning.ConsumerType;


/**
 * Defines the {@code ReactHome} Sling Model used for the {@code reactapp/components/react-home} component.
 * 
 */
@ConsumerType
public interface ReactHome
    extends ComponentExporter
{


    @JsonProperty("phase1")
    String getPhase1();

    @JsonProperty("phase2")
    String getPhase2();

    @JsonProperty("phase3")
    String getPhase3();

    @JsonProperty("phase4")
    String getPhase4();

    @JsonProperty("phase5")
    String getPhase5();

    @JsonProperty("phase6")
    String getPhase6();

    @JsonProperty("phase7")
    String getPhase7();

    @JsonProperty("phase8")
    String getPhase8();

    @JsonProperty("warning")
    String getWarning();

    @JsonProperty("continua")
    String getContinua();

    @JsonProperty("logout")
    String getLogout();

}
